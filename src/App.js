import React from 'react'
import './App.css'
import { Input, Table } from 'antd'

const { Search } = Input

class App extends React.Component {
  state = {
    list: [],
    //列数据（表头）
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
      },
    ]
  }
  onSearch = (value) => {
    console.log(value)
  }
  render () {
    return (
      <div className='container'>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        <Table dataSource={this.state.list} columns={this.state.columns} />;
      </div>
    )
  }
}

export default App
