import {
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { List, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

export const SendBeacon = () => {
  const formRef = useRef<ProFormInstance>(null);

  const initFormValue = () => {
    const baseUrl = localStorage.getItem('baseUrl') || '';
    const apiUrl = localStorage.getItem('apiUrl') || '';

    if (baseUrl && apiUrl) {
      formRef.current?.setFieldsValue({
        baseUrl,
        apiUrl,
      });
    }
  };

  const storageFormValue = (baseUrl: string, apiUrl: string) => {
    localStorage.setItem('baseUrl', baseUrl);
    localStorage.setItem('apiUrl', apiUrl);
  };

  useEffect(() => {
    initFormValue();
  }, []);

  const baseUrlPrefix = 'http://';
  const apiUrlPrefix = '/';

  const onFinish = (formValues: any) => {
    const { baseUrl, apiUrl } = formValues;
    storageFormValue(baseUrl, apiUrl);
    const url = `${baseUrlPrefix}${baseUrl}${apiUrlPrefix}${apiUrl}`;

    setRequestInfoList((prev) => [
      {
        url,
        requestTime: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
      },
      ...prev,
    ]);

    navigator.sendBeacon(url);
  };

  //#region Time

  const [requestInfoList, setRequestInfoList] = useState<
    {
      url: string;
      requestTime: string;
    }[]
  >([]);

  const [now, setNow] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'));
    }, 10);

    return () => clearInterval(intervalId);
  }, []);
  //#endregion

  return (
    <Space
      direction="vertical"
      style={{ minWidth: '300px' }}
    >
      <ProForm
        formRef={formRef}
        onFinish={onFinish}
      >
        <ProFormText
          name="baseUrl"
          label="Base URL"
          fieldProps={{
            addonBefore: baseUrlPrefix,
          }}
          rules={[{ required: true, message: 'Please input base url!' }]}
        />
        <ProFormText
          name="apiUrl"
          label="API URL"
          fieldProps={{
            addonBefore: apiUrlPrefix,
          }}
          rules={[{ required: true, message: 'Please input api url!' }]}
        />
      </ProForm>
      <Typography.Title level={4}>{now}</Typography.Title>
      <List
        size="small"
        bordered
        dataSource={requestInfoList}
        renderItem={(item: { url: string; requestTime: string }) => (
          <List.Item>
            <List.Item.Meta
              description={item.url}
              title={item.requestTime}
            />
          </List.Item>
        )}
      />
    </Space>
  );
};
