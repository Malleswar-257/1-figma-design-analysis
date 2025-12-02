from pydantic import BaseModel

class Data(BaseModel):
    id: int
    value: str

class FilterData(BaseModel):
    filter_value: str