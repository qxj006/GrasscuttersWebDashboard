package top.cyqi.websocket;

import emu.grasscutter.Grasscutter;
import emu.grasscutter.command.CommandMap;
import io.javalin.websocket.WsMessageContext;
import top.cyqi.websocket.json.BaseData;
import top.cyqi.websocket.json.WSData;


public class ServerUtils {
    static void DealMessage(String type, String data, WsMessageContext wsMessageContext) {
        String ws_id = WebSocketServer.ClitenContextMap.get(wsMessageContext);
        switch (type) {
            case "CMD" -> {
                Grasscutter.getLogger().info("[WEB控制台] 执行" + ws_id + "的命令:" + data);
                CommandMap commandMap = Grasscutter.getGameServer().getCommandMap();
                commandMap.invoke(null, null, data);
            }
            case "State" -> wsMessageContext.send(new WSData("BaseData", BaseData.getJSON()));
        }
    }
}
