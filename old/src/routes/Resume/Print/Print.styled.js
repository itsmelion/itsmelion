import styled from 'styled-components';

// export const Wrapper = styled.main`
export default styled.main`
  margin-top: 8em;
  margin-bottom: 4em;
  padding: 1.4cm 2cm 1.4cm 2cm;
  padding-bottom: 4em;
  color: black;
  background-color: white;
  box-shadow: 0 0 18pt rgba(black, 0.4), 0 0 4pt rgba(65, 65, 65, 0.5);
  font-size: 10pt;

  h1 {
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.2;
    text-transform: uppercase;
    @media print {
      color: #666666 !important;
    }
  }
  h2 {
    line-height: 1.2;
    font-weight: 900;
    font-size: 1.75em;
    text-transform: uppercase;
  }

  @media print {
    margin: 0;
    padding: 0;
    padding-left: 1.25cm;
    box-shadow: none;
    a[href]:after {
      content: none;
    }
  }

  hr {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    opacity: 0.2;
  }

  .profile {
    h3,
    h5 {
      color: $black8;
    }
  }

  .perks {
    font-size: 0.65em;
  }

  .tool {
    p { font-size: .5em; color: #AAAAAA }
    @media print {
      p { font-size: .5em; margin-top: -.75em; color: #888888 !important;  }
    }
  }

  #SkillList {
    align-items: flex-start;
  }

  .design-list,
  .frontend-list,
  .backend-list,
  .wish-list { margin-top: 0; }

  .Hex {
    width: 1.5em;
    height: 1.5em;
    color: white;
    font-size: 1.5em;
    flex: 0 0 auto;
    margin: .15em;
    .hex-svg {
      display: none;
    }
    img {
      width: 80%;
      margin: 0;
      filter: saturate(0);
    }
  }

  .show-print {
    display: block;
    margin: 0.75em;
    color: black;
    text-align: left;
    line-height: 1.15;
    font-size: 0.6em;
    @media print {
      font-size: 0.6em;
    }
  }
`;
