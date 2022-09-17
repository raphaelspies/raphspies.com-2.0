import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@mantine/core'

const Text = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  max-width: 600px;
  margin-bottom: 200px;
  border-radius: 20px;
  opacity: 80%;
  margin-left: 250px;
`;

const Vertical = styled.div`
  display: none;
  flex-direction: none;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Inline = styled.div`
  margin-left: 250px;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

const SAvatar = styled(Avatar)`
  opacity: 100% !important;
`;


export {
  Text,
  Vertical,
  Horizontal,
  Inline,
  Centered,
  SAvatar,
}