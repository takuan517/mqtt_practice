import paho.mqtt.client as mqtt
from time import sleep

def on_connect(client, userdata, flag, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("topic/02")

def on_disconnect(client, userdata, flag, rc):
    if rc != 0:
        print("Unexpected disconnection.")

def on_publish(client, userdata, mid):
    print("publish: {0}".format(mid))

def on_message(client, userdata, msg):
    print(str(msg.payload))

def main():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.on_publish = on_publish
    #  メッセージを受け取ったときに呼び出される
    client.on_message = on_message

    # MQTTブローカーと接続
    client.connect("", 14569, 60)

    #　通信処理開始
    client.loop_start()

    #　永久にくり返す
    while True:
        txt = input()
        #　inputで受け取ったメッセージをpublishする
        client.publish("topic/02", txt)

if __name__ == '__main__':
    main()