import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					to={'/'}
					theme={AppLinkTheme.SECONDARY}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}
