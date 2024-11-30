import checkIconDark from '../assets/checkmark-dark.svg'
import checkIconLight from '../assets/checkmark-light.svg'
import { useTheme } from '../common/ThemeContext'

function SkillCard({ skill }) {

	const { theme, toggleTheme } = useTheme();
	const checkmark = theme === 'light' ? checkIconLight : checkIconDark

    return (
        <span>
            <img
                src={checkmark}
                alt='Checkmark icon'
            />
            <p>
                { skill }
            </p>
        </span>
    )
}

export default SkillCard