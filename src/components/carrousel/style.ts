import styled from "styled-components"

export const Container = styled.section`
  .buttons-container {
    width: 100%;
    display: flex;
    padding-inline: 40px;
    margin-block: 10px;
    justify-content: space-evenly;
    button {
      font-size: 1.4rem;
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
  @media (max-width: 770px) {
     {
      display: none;
    }
  }
`

export const CarrouselContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  max-height: 80vh;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  scroll-behavior: smooth;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  .carrousel-item {
    scroll-snap-align: start;
    flex: none;
    width: 100%;
    position: relative;
  }
  border-radius: 10px;
  .carrousel-img {
    background-color: #ffffff;
    z-index: 40;
    display: flex;
    justify-content: center;
    padding: 7px;
    img {
      border-radius: 10px;
      width: calc(80vh - 20px);
      object-fit: cover;
    }
  }
  .carrousel-infors {
    z-index: 99;
    padding: 10px;
    position: absolute;
    bottom: 0;
    font-size: 1.4rem;
    width: 100%;
    color: #ffffff;
    background: linear-gradient(transparent, black);
    -webkit-text-stroke: 0.7px black;
    h1 {
      color: black;
    }
  }
  .carrousel-infors_div {
    margin-left: 10px;
  }
`
