from datetime import date, datetime
from pymongo import MongoClient
import time

client = MongoClient(
    'mongodb+srv://gewwworg:Qscqsc.02@cluster0.jn5m4.mongodb.net/?retryWrites=true&w=majority')

mydb = client["chaos"]
mycol = mydb["react_posts"]

def createPost(theme, text):
    post = {"theme": theme, "text": text}
    mycol.insert_one(post)
    return True

def getPosts():
    posstList = []
    for x in mycol.find({}, {"_id":0}): 
        posstList.append(x)
    return(posstList)