import socket
print("Start a client:Client 1")
HOST="localhost"
PORT=3000
client_socket=socket.socket()
client_socket.connect((HOST,PORT))
client_socket.sendall(b"Hello from the client 1")
response_from_server=client_socket.recv(2048)
print(response_from_server)