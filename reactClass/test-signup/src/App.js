import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControl, FormControlLabel, Checkbox, Grid, Box, Typography, Container, FormHelperText} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

/* styled-components */
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d33f2f !important;
`;
const Boxs = styled(Box)`
  padding-bottom: 30px !important;
`;

function App() {
  const theme = createTheme();
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const [rePwError, setRePwError] = useState('');
  const [nameError, setNameError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleAgree = (e) => {
    setChecked(e.target.checked);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const joinData = {
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      rePassword: data.get('rePassword'),
    };
    const {email, name, password, rePassword} = joinData;

    /* 유효성 검사 */
    const regEmail =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(!regEmail.test(email)){
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else{
      setEmailError('');
    }
    const regPw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,24}/;
    if(!regPw.test(password)){
      setPwError('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
    } else{
      setPwError('');
    }
    if(rePassword !== password){
      setRePwError('비밀번호가 일치하지 않습니다.');
    } else{
      setRePwError('');
    }
    const regName = /^[가-힣]+$/;
    if(!regName.test(name) || name.length < 1){
      setNameError('올바른 이름을 입력해주세요.');
    } else{
      setNameError('');
    }
    if(!checked){
      alert('약관에 동의해주세요.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="이메일 주소"
                    error={emailError !== ""}
                    autoFocus
                  />
                </Grid>
                <FormHelperTexts>{emailError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                    name="password"
                    error={pwError !== ""}
                  />
                </Grid>
                <FormHelperTexts>{pwError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="rePassword"
                    type="password"
                    label="비밀번호 재입력"
                    name="rePassword"
                    error={rePwError !== ""}
                  />
                </Grid>
                <FormHelperTexts>{rePwError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    type="text"
                    label="이름"
                    name="name"
                    error={nameError !== ""}
                  />
                </Grid>
                <FormHelperTexts>{nameError}</FormHelperTexts>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" onChange={handleAgree} />}
                    label="회원가입 약관에 동의합니다."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <FormHelperTexts>{registerError}</FormHelperTexts>
            </FormControl>
          </Boxs>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
