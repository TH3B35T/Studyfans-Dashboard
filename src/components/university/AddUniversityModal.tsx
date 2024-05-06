import { Form, Input, Modal, Row, Col, InputNumber, Checkbox, DatePicker, Divider, Flex, Button } from 'antd';

import React, { useEffect } from 'react';
import { type OptionalUniversity } from 'types/dashboard/university';

type AddUniversityModalProps = {
  open: boolean;
  toggleOpen: () => void;
  data?: OptionalUniversity;
  onSubmit: (data: OptionalUniversity) => void;
};

const AddUniversityModal = ({ open, toggleOpen, onSubmit, data }: AddUniversityModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => form.setFieldsValue(data), [data, form]);
  return (
    <Modal open={open} onCancel={toggleOpen} footer={false} width={800} destroyOnClose>
      <Divider>
        <span className="fs-20 fw-600">Add University</span>
      </Divider>
      <br />
      <Form onFinish={onSubmit} layout="vertical" form={form}>
        <Row gutter={[16, 16]}>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="slug" label="Slug">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="name" label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="website" label="Website">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="content" label="Content">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="campus" label="Campus">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="confessions" label="Confessions">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="lang" label="Lang">
              <Input />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="price" label="Price">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="specialPrice" label="SpecialPrice">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="rank" label="Rank">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="localRank" label="LocalRank">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="students" label="Students">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="order" label="Order">
              <InputNumber className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="applicationDeadLine" label="ApplicationDeadLine">
              <DatePicker className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="country" label="Country">
              <Input className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="currency" label="Currency">
              <Input className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="city" label="City">
              <Input className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="images" label="Images">
              <Input className="wide" />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isScrollableForm" label="IsScrollableForm">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isPrivate" label="IsPrivate">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isAvailable" label="IsAvailable">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isFeatured" label="IsFeatured">
              <Checkbox />
            </Form.Item>
          </Col>
          <Flex justify="end" className="wide">
            <Button size="large" className="bg-primary c-white" htmlType="submit">
              Submit
            </Button>
          </Flex>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddUniversityModal;
