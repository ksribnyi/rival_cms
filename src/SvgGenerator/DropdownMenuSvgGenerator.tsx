const DropdownMenuSvgGenerator = ({id}: { id: string }) => {
    switch (id) {
        case "book_open":
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.66663 2.5H6.66663C7.55068 2.5 8.39853 2.85119 9.02365 3.47631C9.64877 4.10143 9.99996 4.94928 9.99996 5.83333V17.5C9.99996 16.837 9.73657 16.2011 9.26773 15.7322C8.79889 15.2634 8.163 15 7.49996 15H1.66663V2.5Z"
                        stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                        stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "trash":
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7H4.16667H17.5" stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M6.66675 6.00002V4.33335C6.66675 3.89133 6.84234 3.4674 7.1549 3.15484C7.46746 2.84228 7.89139 2.66669 8.33342 2.66669H11.6667C12.1088 2.66669 12.5327 2.84228 12.8453 3.15484C13.1578 3.4674 13.3334 3.89133 13.3334 4.33335V6.00002M15.8334 6.00002V17.6667C15.8334 18.1087 15.6578 18.5326 15.3453 18.8452C15.0327 19.1578 14.6088 19.3334 14.1667 19.3334H5.83341C5.39139 19.3334 4.96746 19.1578 4.6549 18.8452C4.34234 18.5326 4.16675 18.1087 4.16675 17.6667V6.00002H15.8334Z"
                        stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33325 11.1667V16.1667" stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.6667 11.1667V16.1667" stroke="#2C5282" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "edit":
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.16675 4.33331H3.33341C2.89139 4.33331 2.46746 4.50891 2.1549 4.82147C1.84234 5.13403 1.66675 5.55795 1.66675 5.99998V17.6666C1.66675 18.1087 1.84234 18.5326 2.1549 18.8452C2.46746 19.1577 2.89139 19.3333 3.33341 19.3333H15.0001C15.4421 19.3333 15.866 19.1577 16.1786 18.8452C16.4912 18.5326 16.6667 18.1087 16.6667 17.6666V11.8333"
                        stroke="#2A4365" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M15.4167 4.08332C15.7483 3.7518 16.1979 3.56555 16.6667 3.56555C17.1356 3.56555 17.5852 3.7518 17.9167 4.08332C18.2483 4.41484 18.4345 4.86448 18.4345 5.33332C18.4345 5.80216 18.2483 6.2518 17.9167 6.58332L10.0001 14.5L6.66675 15.3333L7.50008 12L15.4167 4.08332Z"
                        stroke="#2A4365" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        default:
            return null
    }
}

export default DropdownMenuSvgGenerator