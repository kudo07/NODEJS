import socket
import threading

def connect_a_client(conn,addr):
    print("new client has been connected")
    data=conn.recv(2048)
    print("Data recieved from client is ",data)
    conn.sendall(b"Server haas received your data thanks")

HOST="localhost"

PORT=3000

# created a new socket object
server_socket=socket.socket()
server_socket.bind(HOST,PORT)

# start listenidng for new connection
server_socket.listen()
while True:
    # it is accepting a new connection
    conn,addr=server_socket.accept()
    # it is preparing for a thread
    t=threading.Thread(target=connect_a_client,args=(conn,addr))
    # it starts running thread
    t.start()