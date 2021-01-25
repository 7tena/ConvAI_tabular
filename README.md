# tableQA
Tool for querying natural language on tabular data like csvs,excel sheet,etc.   

#### Features    
* Supports detection from multiple csvs 
* Support FuzzyString implementation. i.e, incomplete csv values in query can be automatically detected and filled.
* Open-Domain, No training required.


### Configuration:
```git clone https://github.com/adwaith2000/ConvAI_tabular.git ```  

```cd tableqa```

```pip install -r requirements.txt```

      
## Quickstart

Keep the csv data and the schemas in seperate folders. Refer ```cleaned_data``` and `schema` for dummy datas.

#### Getting an SQL query from csv 

```
from tableqa.agent import Agent
agent=Agent(df) #input your dataframe
sql=agent.get_query("Your question here")  
print(sql) #returns an sql query
```

#### Do Sample query on sqlite database
```
from tableqa.agent import Agent
agent=Agent(df) #input your dataframe
response=agent.query_db("Your question here")
print(response)
```
