import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
  color: #000;
  font-size: 14px;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;
`;

export const WrapperLabel = styled.label`
  color: #000;
  font-size: 12px;
  line-height: 30px;
  font-weight: 600;
  width: 60px;
  text-align: left;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: cemter;
  gap: 20px;
`;
export const WrapperImage = styled.div`
  display: flex;
  align-items: cemter;
  gap: 20px;
  flex-direction: column;
`;
