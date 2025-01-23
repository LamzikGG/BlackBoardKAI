from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker #Для создания сессии вторая библиотека, а первая асинхронный движок
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
#После плюса идет драйвер
engine = create_async_engine("sqlite+aiosqlite:///people.db")

#ORM verssion
new_session = async_sessionmaker(engine, expire_on_commit=False)

#Асинхронная функция
async def get_session():
    async with new_session() as session:
        yield session

class People(DeclarativeBase):
    pass
class Profiles(People):
    __tablename__ = "login"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    password: Mapped[int]

async def setup_database():
    async with engine.begin() as conn:
        await conn.run_sync(People.metadata.drop_all)
        await conn.run_sync(People.metadata.create_all)
        