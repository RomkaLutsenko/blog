import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    const newConfig: webpack.Configuration = { ...config };

    newConfig.resolve = {
        ...newConfig.resolve,
        modules: [...(newConfig.resolve?.modules || []), paths.src],
        extensions: [...(newConfig.resolve?.extensions || []), '.ts', '.tsx'],
    };

    const processedRules = (newConfig.module?.rules || []).map((rule: RuleSetRule) => {
        const isSvgRule = rule.test && rule.test.toString().includes('svg');
        if (isSvgRule) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    newConfig.module = {
        ...newConfig.module,
        rules: [
            ...processedRules,
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            buildCssLoader(true),
        ],
    };

    return newConfig;
};
