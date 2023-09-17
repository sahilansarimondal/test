import { Card, Typography, Button } from "@mui/material";
import "./App.css";
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from "recoil";

function App() {
   return (
      <RecoilRoot>
         <div
            style={{
               width: "400px",
               height: "200px",
               display: "block",
               margin: "auto",
            }}
         >
            <Card variant="outlined" style={{ padding: "40px" }}>
               <div style={{ display: "block", margin: "auto" }}>
                  <Typography
                     style={{
                        textAlign: "center",
                        fontStyle: "italic",
                        fontSize: "24px",
                        marginBottom: "20px",
                     }}
                  >
                     Wellcome to the counter game
                  </Typography>
                  <Mybtn />
                  <CountComponent />
               </div>
            </Card>
         </div>
      </RecoilRoot>
   );
}

function Mybtn() {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
         }}
      >
         <Increase />
         <Decrease />
      </div>
   );
}

function Increase() {
   const setCount = useSetRecoilState(countState);
   return (
      <>
         <Button
            variant="contained"
            onClick={() => {
               setCount((existingCount) => existingCount + 1);
            }}
         >
            + Add
         </Button>
      </>
   );
}

function Decrease() {
   const setCount = useSetRecoilState(countState);
   return (
      <>
         <Button
            variant="contained"
            onClick={() => {
               setCount((existingCount) => existingCount - 1);
            }}
         >
            - Less
         </Button>
      </>
   );
}

function CountComponent() {
   const count = useRecoilValue(countState);
   return (
      <div>
         <p
            style={{
               textAlign: "center",
               font: "message-box",
               fontSize: "24px",
            }}
         >
            Counter {count}
         </p>
      </div>
   );
}

export default App;

const countState = atom({
   key: "countState",
   default: 0,
});
