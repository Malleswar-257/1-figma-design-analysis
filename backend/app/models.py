from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Data(Base):
    __tablename__ = "data"

    id = Column(Integer, primary_key=True)
    value = Column(String)

    def __repr__(self):
        return f"Data(id={self.id}, value='{self.value}')"