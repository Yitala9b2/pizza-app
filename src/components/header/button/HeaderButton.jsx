
import classNames from 'classnames';


const HeaderButton = ({ className, outline, children }) => {
    return (
        <button className={
            classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
};


export default HeaderButton;
