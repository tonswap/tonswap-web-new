import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const StyledTokenOperation = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 20,
  flex:1,
  width:'100%',
  [theme.breakpoints.down('sm')]: {
    paddingTop: 20,
  }
}));



export const StyledTokenOperationActions = styled(Box)({
   width:'100%',
   paddingTop: 23,
   maxWidth: 380
  });


  export const StyledTokenOperationTitle = styled(Typography)(({expanded}: {expanded?: boolean}) => ({
        fontSize: expanded ? 26 : 22,
        fontWeight: 500,
        marginBottom: 20
  }))