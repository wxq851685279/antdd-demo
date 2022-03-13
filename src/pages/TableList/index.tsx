import React, {useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';

import {Switch} from "antd";
import {ProFormText} from "@ant-design/pro-form";
import {StepsForm} from "@ant-design/pro-form";


const TableList: React.FC = () => {

  const [isStatus,setStatus] = useState<boolean>(true);

  return (
    <PageContainer>
      <StepsForm>
        <StepsForm.StepForm title="创建实验">
            创建实验
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
          />

          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked onChange={(status) => {
            setStatus(status)
          }} />
        </StepsForm.StepForm>
        {
          isStatus?(
            <StepsForm.StepForm title="设置参数">
              设置参数
            </StepsForm.StepForm>
          ):null
        }

        <StepsForm.StepForm title="发布实验">
          发布实验
        </StepsForm.StepForm>
      </StepsForm>
    </PageContainer>
  );
};

export default TableList;
