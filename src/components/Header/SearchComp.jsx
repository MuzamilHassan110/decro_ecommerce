
import { Form, Input } from 'antd'

export const SearchComp = () => {
  return (
                 <Form className='searchBar'>
                  <Form.Item>
                    <Input placeholder="Search product" className="search_item" />
                  </Form.Item>
                </Form>
  )
}

export default SearchComp