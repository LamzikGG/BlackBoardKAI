from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Настройка CORS - это важно!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене замените на конкретный домен
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

vivod = "Все работает"

profiles = [
    {
        "id": 1,
        "name": "S",
        "password": 2,
    },
    {
        "id": 2,
        "name": "N",
        "password": 3,
    },
]

@app.get("/autorisation", tags=["Авторизация"], summary=["Проверка логина и пароля по БД"])
def autorisation(name: str, password:int):
    for people_input in profiles:
        if people_input["name"] == name and people_input["password"] == password:
            return vivod
    raise HTTPException(status_code=404, detail="Error")