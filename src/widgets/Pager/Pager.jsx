import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Pager extends React.Component {
    render() {
        const { prev, next, pages, page } = this.props;
        return (
            <Pagination>
                <PaginationItem disabled={page === 1}>
                    <PaginationLink previous href="#" onClick={prev} />
                </PaginationItem>
                <PaginationItem disabled={page === pages}>
                    <PaginationLink next href="#" onClick={next} />
                </PaginationItem>
            </Pagination>
        )
    }
}

export default Pager;