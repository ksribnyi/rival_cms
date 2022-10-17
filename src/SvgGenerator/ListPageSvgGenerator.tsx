const ListPageSvgGenerator = ({id}: { id: string }) => {
    switch (id) {
        case "file_plus":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V12" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H15" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "more_horizontal":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                        stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                        stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        default:
            return null
    }
}
export default ListPageSvgGenerator