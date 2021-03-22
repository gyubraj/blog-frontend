import { Pagination } from 'react-bootstrap';

const paginations = (props) => {

    let itemsperpage = props.itemsperpage;
    let count = props.count;
    let displayNumber = Math.ceil(count / itemsperpage)
    let items = [];
    for (let number = 1; number <= displayNumber; number++) {
        items.push(
            <Pagination.Item key={number} active={number === props.active} onClick={() => props.visitPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <div>
            <Pagination>
                <Pagination.Item onClick={props.previous_result}>Previous</Pagination.Item>
                {items}
                <Pagination.Item onClick={props.next_result}>Next</Pagination.Item>
            </Pagination>
        </div>
    );


};

export default paginations