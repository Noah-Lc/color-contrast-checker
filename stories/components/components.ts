import { styled } from "../../stitches.config";

  export const Main = styled("div", {
    margin: "auto",
    textAlign: "center"
  });
  
  export const Heading = styled("h1", {
    fontFamily: "$h4",
    fontWeight: "$h5",
    fontStyle: "$h5",
    fontSize: "$h5",
    lineHeight: "$h5",
  });
  
  export const Subtitle = styled("p", {
    fontFamily: "$subtitle2",
    fontWeight: "$subtitle2",
    fontStyle: "$subtitle2",
    fontSize: "$subtitle2",
    lineHeight: "$subtitle2",
  });
  
  export const ColorInput = styled("div", {
    margin: "10px auto",
    maxWidth: "320px",
    '& Input': {
      borderRight: "0",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0"
    },
    '& Button': {
      borderLeft: "0",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
  });
  
  export const Input = styled("input", {
    padding: '.375rem .75rem',
    fontSize: '1.2rem',
    border: "1px solid #ced4da",
  });
  
  export const Center = styled("div", {
    textAlign: 'center',
  });

  export const Button = styled("button", {
    padding: '.375rem .75rem',
    fontSize: '1.2rem',
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    cursor: "pointer",
    variants: {
      color: {
        primary: {
          backgroundColor: '$pri',
          color: 'white'
        },
        secondary: {
          backgroundColor: '$sec',
          color: 'white'
        },
        success: {
          backgroundColor: '$suc',
          color: 'white'
        },
        danger: {
          backgroundColor: '$ale',
          color: 'white'
        },
      },
    },
  });
    
  export const Crad = styled("div", {
    position: "relative",
    display: "flex",
    margin: "0 10px",
    flexDirection: "column",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    minHeight: "450px",
    flexBasis: "0",
    flexGrow: 1,
    maxWidth: "320px"
  });
    
  export const HeaderCrad = styled("div", {
    padding: "20px",
    borderBottom: "1px solid #ced4da",
    [`& h3`]: {
      color: "white",
      fontSize: "25px",
      fontWeight: "600",
      height: "95px",
      margin: 0,
    },
    [`& ul`]: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      padding: "0",
      margin: "0",
      listStyle: "none",
    },
    [`& ul li`]: {
      fontSize: "15px",
    },
    [`& ul li:last-child`]: {
      textAlign: "right",
    },
    [`& ul li.light p`]: {
      color: "white",
    },
    [`& ul li.dark p`]: {
      color: "black",
    },
    [`& ul li label`]: {
      color: "white",
      padding: "4px 8px",
      border: "1px solid white",
    },
    [`& ul li label.pass`]: {
      backgroundColor: "#578f83",
    },
    [`& ul li label.fail`]: {
      backgroundColor: "#c36f7b",
    },
  });
    
  export const BodyCrad = styled("div", {
    backgroundColor: "white",
    padding: "20px",
    [`& ul`]: {
      listStyle: "none",
      fontSize: "15px",
      padding: "0",
      margin: "0",
    },
    [`& ul li:not(:last-child)`]: {
      paddingBottom: "10px",
    },
    [`& ul li label`]: {
      textTransform: "uppercase",
      color: "#99a0ac",
    },
    [`& ul li p`]: {
      margin: "5px 0",
    },
  });
    
  export const RatioTest = styled("span", {
    color: "white",
    padding: "4px 8px",
    border: "1px solid white",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "13px",
    width: "52px",
    variants: {
      color: {
        pass: {
          backgroundColor: "#578f83",
        },
        fail: {
          backgroundColor: "#c36f7b",
        },
      },
    },
  });
    
  export const LoadingCard = styled("span", {
    position: "absolute",
    background: "whitesmoke",
    width: "100%",
    height: "100%",
    ['& #loading']: {
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "-25px 0 0 -25px",
      width: "50px",
      height: "50px",
      border: "3px solid $gs3",
      borderRadius: "50%",
      borderTopColor: "$gs2",
      animation: "spin 1s ease-in-out infinite",
    
    },
    ['& p']: {
      position: "absolute",
      textAlign: "center",
      top: "45%",
      width: "100%",
      fontWeight: "500",
      color: "rgba(0, 0, 0, 0.4)"
    }
  });