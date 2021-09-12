import { SalePage } from "types/sale";

//const Pagination = ( { page, onPageChange } : Props) => {
type Props = {
    page: SalePage;
    onPageChange: Function;

}

/*            <li className={`page - item ${page.first ? 'disabled' : '' }`}>
                    <button className="page-link" onClick={() => onPageChange(0)}>Primeira</button>
                </li>
            <li className={`page - item ${page.first ? 'disabled' : ''} `}>
                <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                </li>
*/

const Pagination = ({ page, onPageChange }: Props) => {

    return (
        <div className="d-flex justify-content-center">
            <nav>
         <ul className="pagination">
             
            <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
            </li>
            <li className="page-item disabled">
                <span className="page-link">{page.number + 1}</span>
            </li>
            <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
            </li>
        </ul>
            </nav >
        </div >


    )

}

export default Pagination;
