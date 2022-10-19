const CreatePageSvgGenerator = ({id}: { id: string }) => {
    switch (id) {
        case "edit":
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.16675 4.33331H3.33341C2.89139 4.33331 2.46746 4.50891 2.1549
                        4.82147C1.84234 5.13403 1.66675 5.55795 1.66675 5.99998V17.6666C1.66675
                        18.1087 1.84234 18.5326 2.1549 18.8452C2.46746 19.1577 2.89139 19.3333
                        3.33341 19.3333H15.0001C15.4421 19.3333 15.866 19.1577 16.1786 18.8452C16.4912
                        18.5326 16.6667 18.1087 16.6667 17.6666V11.8333"
                        stroke="#2A4365" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M15.4167 4.08332C15.7483 3.7518 16.1979 3.56555 16.6667
                        3.56555C17.1356 3.56555 17.5852 3.7518 17.9167 4.08332C18.2483
                        4.41484 18.4345 4.86448 18.4345 5.33332C18.4345 5.80216 18.2483
                        6.2518 17.9167 6.58332L10.0001 14.5L6.66675 15.3333L7.50008 12L15.4167 4.08332Z"
                        stroke="#2A4365" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "eye":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#FFFCFE"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9
                        13.6569 10.3431 15 12 15Z"
                        stroke="#FFFCFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "plus_circle":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715
                        2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#2A4365" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="#2A4365" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="#2A4365" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        default:
            return null
    }
}

export default CreatePageSvgGenerator