const TextWrapper: React.FunctionComponent = ({ children }) => (
    <div>
        {children}
        
        <style jsx>{`
            div {
                width: 90%;
                margin: auto;
            }
        `}</style>
    </div>
)

export default TextWrapper;