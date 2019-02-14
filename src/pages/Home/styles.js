import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #F9F9F9;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1024px;
`;

export const Table = styled.table`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #EBEBEB;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);

  tbody {
    tr {
      color: #666666;

      td {
        border-bottom: 1px solid #EBEBEB;
        padding: 10px;
        height: 50px;
      }

      &:last-child {
        td {
          border-bottom: 0;
        }
      }

      td.user-icon {
        text-align: center;
        color: #999999;

        i.fa-user-circle {
          font-size: 1.5em;
        }
      }

      td.full-name {
        font-weight: 600;
      }

      td.options {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
          background: transparent;
          border: 0;
          cursor: pointer;
          margin-left: 15px;
          font-size: 1.05em;

          i {
            transition: all ease-in-out .5s;

            &:hover {
              opacity: .7;
            }
          }

          i.fa-trash-o {
            color: #db4437;
          }

          i.fa-star,
          i.fa-star-o {
            color: #dba829;
          }

          i.fa-pencil {
            color: #666666;
          }
        }
      }
    }
  }
`;

export const Button = styled.button`
  width: auto;
  height: 45px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: #f85601;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 1.05em;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  transition: all ease-in-out .5s;

  &:hover { box-shadow: none }

  i.fa-plus {
    font-size: 0.9em;
    margin-left: 6px;
  }
`;
