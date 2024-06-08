import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box id="about" p={1} mt={0} textAlign="center" mx="auto" maxWidth="700px"> 
      <Typography variant="h1" gutterBottom>
            О себе
      </Typography>
      <Typography variant="body1">
        Приветствую всех зашедших!<br />
        Меня зовут Илья, живу в Москве, родился в прошлом тысячелетии.<br />
        На работе занимаюсь системным анализом, настройкой платформы и написанием SQL-запросов.<br />
        Люблю готовить и есть вкусную еду. Увлекаюсь путешествиями и бегом- могу зимой пробежать 40+ км по пересечённой местности.
      </Typography>
    </Box>
  );
}
