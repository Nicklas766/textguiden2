type Props = {
    isClicked: boolean
}

const HamburgerMenu: React.FunctionComponent<Props> = ({ isClicked }) => (
    <div className={`container ${isClicked ? 'change' : ''}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>

        <style jsx>{`
            .container {
                display: inline-block;
                cursor: pointer;
            }
            
            .bar1, .bar2, .bar3 {
                width: 35px;
                height: 5px;
                background-color: #333;
                margin: 6px 0;
                transition: 0.4s;
            }
            
            .change .bar1 {
                -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                transform: rotate(-45deg) translate(-9px, 6px);
            }
            
            .change .bar2 {opacity: 0;}
            
            .change .bar3 {
                -webkit-transform: rotate(45deg) translate(-8px, -8px);
                transform: rotate(45deg) translate(-8px, -8px);
            }

        `}</style>
    </div>
)

export default HamburgerMenu;