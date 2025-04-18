import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('about')

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					to={'/'}
					theme={AppLinkTheme.SECONDARY}
					className={cls.mainLink}
				>
					{t('main:Главная')}
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	)
}
