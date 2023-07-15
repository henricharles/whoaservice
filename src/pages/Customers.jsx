import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
const Customers = () => {
  return (
  
      <div className="m-2 md:m-10 p-2  md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Clients" />
        <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Search','Delete','Add']} width="auto"
        editSettings={{ allowDeleting: true, allowAdding: true, allowEditing: true}}>
          <ColumnsDirective>
            {customersGrid.map((item, index) =>(
              <ColumnDirective key= {index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}/>
        </GridComponent>
      </div>
    
  )
}

export default Customers