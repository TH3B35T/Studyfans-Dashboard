import { Form, Input, Modal, Row, Col, InputNumber, DatePicker, Divider, Flex, Button, type UploadFile, Switch, Select } from 'antd';
import GalleryList from 'components/shared/Galery';

import React, { useEffect, useState } from 'react';
import { type OptionalUniversity } from 'types/dashboard/university';

type AddUniversityModalProps = {
  open: boolean;
  toggleOpen: () => void;
  data?: OptionalUniversity;
  onSubmit: (data: OptionalUniversity, imgs: UploadFile[]) => void;
};

const AddUniversityModal = ({ open, toggleOpen, onSubmit, data }: AddUniversityModalProps) => {
  const [form] = Form.useForm();
  const [gallery, setGallery] = useState<UploadFile[]>([]);
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);
  return (
    <Modal open={open} onCancel={toggleOpen} footer={false} width={800} destroyOnClose>
      <Divider>
        <span className="fs-20 fw-600">Add University</span>
      </Divider>
      <br />
      <Form onFinish={(e) => onSubmit(e, gallery)} layout="vertical" form={form}>
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
            <Form.Item style={{ minWidth: '300px' }} name="campus" label="Campus">
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
              <Select
                options={[
                  { label: 'Turkey', value: 'Turkey' },
                  { label: 'Egypt', value: 'Egypt' }
                ]}
                className="wide"
              />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="city" label="City">
              <Select
                options={[
                  { label: 'Istanbul', value: 'Istanbul' },
                  { label: 'Cairo', value: 'Cairo' }
                ]}
                className="wide"
              />
            </Form.Item>
          </Col>

          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item style={{ minWidth: '300px' }} name="currency" label="Currency">
              <Select
                options={[
                  { label: 'USD', value: 'USD' },
                  { label: 'EUR', value: 'Egypt' }
                ]}
                className="wide"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item style={{ minWidth: '300px' }} name="content" label="Content">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item style={{ minWidth: '300px' }} name="confessions" label="Confessions">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>

          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isScrollableForm" label="IsScrollableForm">
              <Switch />
            </Form.Item>
          </Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isPrivate" label="IsPrivate">
              <Switch />
            </Form.Item>
          </Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isAvailable" label="IsAvailable">
              <Switch />
            </Form.Item>
          </Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            <Form.Item style={{ minWidth: '300px' }} name="isFeatured" label="IsFeatured">
              <Switch />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Images">
              <GalleryList gallery={gallery} setGallery={setGallery} />
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
