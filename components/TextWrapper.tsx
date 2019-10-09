const TextWrapper: React.FunctionComponent = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                width: 90%;
                padding: 10px;
                margin: auto;
            }
        `}</style>
    </div>
)

export default TextWrapper;