import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: ${props => (props.show ? 'flex' : 'none')};

  .modal {
    width: 300px;
    height: 170px;
    background: #fff;
    border-radius: 5px;
    padding: 15px;

    h2 {
      text-align: center;
    }

    .error {
      color: #f00;
      font-size: 12px;
    }

    form input {
      width: 100%;
      height: 36px;
      border: solid 1px #999;
      border-radius: 3px;
      margin-top: 20px;
      padding: 10px;
    }

    form .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 40px;
    }

    form .btn-cancel {
      width: 100px;
      height: 36px;
      border-radius: 3px;
      margin-top: 10px;
      padding: 10px;
      background: #999;
      border: none;
      color: #fff;
      font-size: 15px;

      &:hover {
        background: #717171;
      }
    }

    form button {
      cursor: pointer;
    }

    form .btn-save {
      width: 100px;
      height: 36px;
      border-radius: 3px;
      margin-top: 10px;
      padding: 10px;
      background: #28c157;
      border: none;
      color: #fff;
      font-size: 15px;

      &:hover {
        background: #1ea948;
      }
    }
  }
`;
