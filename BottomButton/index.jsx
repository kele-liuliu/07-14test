import { Button, Space, Row } from 'antd'

const BottomButton = (props) => {
  const justify = props?.justify || 'end'
  return (
    <>
      <Row justify={justify}>
        <Space>
          <Button
            type="primary"
            key="submit"
            loading={props?.submitButtonProps?.loading}
            onClick={() => props.form?.submit?.()}
          >
            提交
          </Button>
          <Button type="default" key="rest" onClick={() => props?.form?.resetFields()}>
            重置
          </Button>
          <Button type="default" key="cancel" onClick={props?.onCancel}>
            取消
          </Button>
        </Space>
      </Row>
    </>
  )
}

export default BottomButton
