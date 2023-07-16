import moment from "moment/moment";
import React from "react";

import styled from "styled-components";

import { BsCode } from "react-icons/bs";
import { AiOutlineFork, AiFillStar, AiOutlineFileText } from "react-icons/ai";
import { GoComment } from "react-icons/go";

const Gist = ({ itemData }) => {
  const filesArr = Object.values(itemData?.files);

  return (
    <StyledDiv>
      <div className="head">
        <div className="user">
          <img alt="" src={itemData?.owner?.avatar_url} />
          <p>{itemData?.owner?.login}</p>
        </div>
        <div className="git_utils">
          <div>
            <BsCode />
            <p>{filesArr?.length} Files</p>
          </div>
          <div onClick={() => window.open(`${itemData?.forks_url}`)}>
            <AiOutlineFork />
            <p>Forks</p>
          </div>
          <div onClick={() => window.open(`${itemData?.comments_url}`)}>
            <GoComment />
            <p>Comments</p>
          </div>
          <div>
            <AiFillStar />
            <p>Stars</p>
          </div>
        </div>
      </div>
      <StyledDateDiv>
        <p>Created at: {moment(itemData?.created_at).format("D/mm/yyyy")}</p>
        <p>Last Updated: {moment(itemData?.updated_at).format("D/mm/yyyy")}</p>
      </StyledDateDiv>
      <div className="content">
        <h2>{itemData?.description}</h2>
        <div className="files_div">
          {filesArr?.map((item, index) => (
            <div
              className="file"
              key={index}
              onClick={() => window.open(`${item?.raw_url}`)}
            >
              <AiOutlineFileText />
              <p>{item?.filename}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledDiv>
  );
};

export default Gist;

const StyledDiv = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:nth-last-child(1) {
    border: none;
  }
  margin-block: 15px;
  .head {
    display: flex;
    justify-content: space-between;
    .user {
      display: flex;
      p {
        color: blue;
        margin-left: 15px;
      }
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
    }
    .git_utils {
      display: flex;
      div {
        display: flex;
        align-items: center;
        color: blue;
        margin-right: 15px;
        cursor: pointer;
        &:nth-last-child(1) {
          margin-right: 0px;
        }
        svg {
          margin-right: 5px;
        }
      }
    }
  }
  .content {
    h2 {
      font-weight: 500;
      margin-block: 0;
      color: #595a5c;
    }

    .files_div {
      display: flex;
      flex-wrap: wrap;
      svg {
        font-size: 25px;
        margin-right: 5px;
      }
      .file {
        cursor: pointer;
        margin-right: 15px;
        margin-left: 5px;
        color: blue;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const StyledDateDiv = styled.div`
  display: flex;
  p {
    color: #595a5c;
  }
  p:nth-child(1) {
    margin-right: 15px;
  }
`;
