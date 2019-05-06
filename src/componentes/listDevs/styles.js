import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: calc(100vh - 40px);
  margin: 20px 0 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  position: absolute;
  z-index: 2;

  .item {
    width: 90%;
    height: 70px;
    padding: 10px;
    border-bottom: solid 1px #eee;
    display: flex;
    flex-direction: row;
    align-items: center;

    .info-dev {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding-left: 15px;
      flex: 2;
    }

    span {
      color: #666;
      font-size: 12px;
    }

    img {
      width: 50px;
      border-radius: 50%;
    }

    .icons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      flex: 1;

      .fa-times-circle {
        color: #f00;
      }

      .fa-chevron-right {
        color: #ccc;
        margin-left: 20px;
      }
    }
  }
`;
