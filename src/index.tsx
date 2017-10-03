import * as React from 'react';
import { Transfer, Form } from 'antd';

class InternalTestForm extends React.Component<any, any> {

  state: any = {
    items: [{
      key: '1',
      title: 'A'
    }, {
      key: '2',
      title: 'B'
    }, {
      key: '3',
      title: 'C'
    }],
    selectedKeys: ['2']
  }

  handleChange = (keys: any) => {
    this.setState({
      selectedKeys: keys
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    this.handleChange = this.handleChange.bind(this)
    return (
      <Form>
        <Form.Item label="Test">
          {getFieldDecorator('field', {
            valuePropName: 'targetKeys',
            initialValue: this.state.selectedKeys
          })(
            <Transfer
              dataSource={this.state.items}
              showSearch
              onChange={this.handleChange}
              render={(item: any) => item.title}
            />
          )}
        </Form.Item>
      </Form>
    )
  }

}

const TestForm = Form.create()(InternalTestForm)