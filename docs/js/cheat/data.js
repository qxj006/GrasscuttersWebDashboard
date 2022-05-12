var weapon_list = JSON.parse(`[{"id": 11101, "name": "\u65e0\u950b\u5251", "level": 1}, {"id": 11201, "name": "\u94f6\u5251", "level": 2}, {"id": 11301, "name": "\u51b7\u5203", "level": 3}, {"id": 11302, "name": "\u9ece\u660e\u795e\u5251", "level": 3}, {"id": 11303, "name": "\u65c5\u884c\u5251", "level": 3}, {"id": 11304, "name": "\u6697\u94c1\u5251", "level": 3}, {"id": 11305, "name": "\u5403\u864e\u9c7c\u5200", "level": 3}, {"id": 11306, "name": "\u98de\u5929\u5fa1\u5251", "level": 3}, {"id": 11401, "name": "\u897f\u98ce\u5251", "level": 4}, {"id": 11402, "name": "\u7b1b\u5251", "level": 4}, {"id": 11403, "name": "\u796d\u793c\u5251", "level": 4}, {"id": 11404, "name": "\u5b97\u5ba4\u957f\u5251", "level": 4}, {"id": 11405, "name": "\u5323\u91cc\u9f99\u541f", "level": 4}, {"id": 11406, "name": "\u8bd5\u4f5c\u65a9\u5ca9", "level": 4}, {"id": 11407, "name": "\u94c1\u8702\u523a", "level": 4}, {"id": 11408, "name": "\u9ed1\u5ca9\u957f\u5251", "level": 4}, {"id": 11409, "name": "\u9ed1\u5251", "level": 4}, {"id": 11410, "name": "\u6697\u5df7\u95ea\u5149", "level": 4}, {"id": 11412, "name": "\u964d\u4e34\u4e4b\u5251", "level": 4}, {"id": 11413, "name": "\u8150\u6b96\u4e4b\u5251", "level": 4}, {"id": 11414, "name": "\u5929\u76ee\u5f71\u6253\u5200", "level": 4}, {"id": 11415, "name": "\u8fb0\u7802\u4e4b\u7eba\u9524", "level": 4}, {"id": 11501, "name": "\u98ce\u9e70\u5251", "level": 5}, {"id": 11502, "name": "\u5929\u7a7a\u4e4b\u5203", "level": 5}, {"id": 11503, "name": "\u82cd\u53e4\u81ea\u7531\u4e4b\u8a93", "level": 5}, {"id": 11504, "name": "\u65ab\u5cf0\u4e4b\u5203", "level": 5}, {"id": 11505, "name": "\u78d0\u5ca9\u7ed3\u7eff", "level": 5}, {"id": 11509, "name": "\u96fe\u5207\u4e4b\u56de\u5149", "level": 5}, {"id": 11510, "name": "\u6ce2\u4e71\u6708\u767d\u7ecf\u6d25", "level": 5}, {"id": 12101, "name": "\u8bad\u7ec3\u5927\u5251", "level": 1}, {"id": 12201, "name": "\u4f63\u5175\u91cd\u5251", "level": 2}, {"id": 12301, "name": "\u94c1\u5f71\u9614\u5251", "level": 3}, {"id": 12302, "name": "\u6c90\u6d74\u9f99\u8840\u7684\u5251", "level": 3}, {"id": 12303, "name": "\u767d\u94c1\u5927\u5251", "level": 3}, {"id": 12304, "name": "\u77f3\u82f1\u5927\u5251", "level": 3}, {"id": 12305, "name": "\u4ee5\u7406\u670d\u4eba", "level": 3}, {"id": 12306, "name": "\u98de\u5929\u5927\u5fa1\u5251", "level": 3}, {"id": 12401, "name": "\u897f\u98ce\u5927\u5251", "level": 4}, {"id": 12402, "name": "\u949f\u5251", "level": 4}, {"id": 12403, "name": "\u796d\u793c\u5927\u5251", "level": 4}, {"id": 12404, "name": "\u5b97\u5ba4\u5927\u5251", "level": 4}, {"id": 12405, "name": "\u96e8\u88c1", "level": 4}, {"id": 12406, "name": "\u8bd5\u4f5c\u53e4\u534e", "level": 4}, {"id": 12407, "name": "\u767d\u5f71\u5251", "level": 4}, {"id": 12408, "name": "\u9ed1\u5ca9\u65a9\u5200", "level": 4}, {"id": 12409, "name": "\u87ad\u9aa8\u5251", "level": 4}, {"id": 12410, "name": "\u5343\u5ca9\u53e4\u5251", "level": 4}, {"id": 12411, "name": "\u96ea\u846c\u7684\u661f\u94f6", "level": 4}, {"id": 12412, "name": "\u8854\u73e0\u6d77\u7687", "level": 4}, {"id": 12414, "name": "\u6842\u6728\u65a9\u957f\u6b63", "level": 4}, {"id": 12416, "name": "\u6076\u738b\u4e38", "level": 4}, {"id": 12501, "name": "\u5929\u7a7a\u4e4b\u50b2", "level": 5}, {"id": 12502, "name": "\u72fc\u7684\u672b\u8def", "level": 5}, {"id": 12503, "name": "\u677e\u7c41\u54cd\u8d77\u4e4b\u65f6", "level": 5}, {"id": 12504, "name": "\u65e0\u5de5\u4e4b\u5251", "level": 5}, {"id": 12510, "name": "\u8d64\u89d2\u77f3\u6e83\u6775", "level": 5}, {"id": 13101, "name": "\u65b0\u624b\u957f\u67aa", "level": 1}, {"id": 13201, "name": "\u94c1\u5c16\u67aa", "level": 2}, {"id": 13301, "name": "\u767d\u7f28\u67aa", "level": 3}, {"id": 13302, "name": "\u94ba\u77db", "level": 3}, {"id": 13303, "name": "\u9ed1\u7f28\u67aa", "level": 3}, {"id": 13304, "name": "\u300c\u65d7\u6746\u300d", "level": 3}, {"id": 13401, "name": "\u5323\u91cc\u706d\u8fb0", "level": 4}, {"id": 13402, "name": "\u8bd5\u4f5c\u661f\u9570", "level": 4}, {"id": 13403, "name": "\u6d41\u6708\u9488", "level": 4}, {"id": 13404, "name": "\u9ed1\u5ca9\u523a\u67aa", "level": 4}, {"id": 13405, "name": "\u51b3\u6597\u4e4b\u67aa", "level": 4}, {"id": 13406, "name": "\u5343\u5ca9\u957f\u67aa", "level": 4}, {"id": 13407, "name": "\u897f\u98ce\u957f\u67aa", "level": 4}, {"id": 13408, "name": "\u5b97\u5ba4\u730e\u67aa", "level": 4}, {"id": 13409, "name": "\u9f99\u810a\u957f\u67aa", "level": 4}, {"id": 13414, "name": "\u559c\u591a\u9662\u5341\u6587\u5b57", "level": 4}, {"id": 13415, "name": "\u300c\u6e14\u83b7\u300d", "level": 4}, {"id": 13416, "name": "\u65ad\u6d6a\u957f\u9ccd", "level": 4}, {"id": 13501, "name": "\u62a4\u6469\u4e4b\u6756", "level": 5}, {"id": 13502, "name": "\u5929\u7a7a\u4e4b\u810a", "level": 5}, {"id": 13504, "name": "\u8d2f\u8679\u4e4b\u69ca", "level": 5}, {"id": 13505, "name": "\u548c\u749e\u9e22", "level": 5}, {"id": 13507, "name": "\u606f\u707e", "level": 5}, {"id": 13509, "name": "\u8599\u8349\u4e4b\u7a3b\u5149", "level": 5}, {"id": 14101, "name": "\u5b66\u5f92\u7b14\u8bb0", "level": 1}, {"id": 14201, "name": "\u53e3\u888b\u9b54\u5bfc\u4e66", "level": 2}, {"id": 14301, "name": "\u9b54\u5bfc\u7eea\u8bba", "level": 3}, {"id": 14302, "name": "\u8ba8\u9f99\u82f1\u6770\u8c2d", "level": 3}, {"id": 14303, "name": "\u5f02\u4e16\u754c\u884c\u8bb0", "level": 3}, {"id": 14304, "name": "\u7fe1\u7389\u6cd5\u7403", "level": 3}, {"id": 14305, "name": "\u7532\u7ea7\u5b9d\u73cf", "level": 3}, {"id": 14306, "name": "\u7425\u73c0\u73a5", "level": 3}, {"id": 14401, "name": "\u897f\u98ce\u79d8\u5178", "level": 4}, {"id": 14402, "name": "\u6d41\u6d6a\u4e50\u7ae0", "level": 4}, {"id": 14403, "name": "\u796d\u793c\u6b8b\u7ae0", "level": 4}, {"id": 14404, "name": "\u5b97\u5ba4\u79d8\u6cd5\u5f55", "level": 4}, {"id": 14405, "name": "\u5323\u91cc\u65e5\u6708", "level": 4}, {"id": 14406, "name": "\u8bd5\u4f5c\u91d1\u73c0", "level": 4}, {"id": 14407, "name": "\u4e07\u56fd\u8bf8\u6d77\u56fe\u8c31", "level": 4}, {"id": 14408, "name": "\u9ed1\u5ca9\u7eef\u7389", "level": 4}, {"id": 14409, "name": "\u662d\u5fc3", "level": 4}, {"id": 14410, "name": "\u6697\u5df7\u7684\u9152\u4e0e\u8bd7", "level": 4}, {"id": 14412, "name": "\u5fcd\u51ac\u4e4b\u679c", "level": 4}, {"id": 14413, "name": "\u561f\u561f\u53ef\u6545\u4e8b\u96c6", "level": 4}, {"id": 14414, "name": "\u767d\u8fb0\u4e4b\u73af", "level": 4}, {"id": 14415, "name": "\u8bc1\u8a93\u4e4b\u660e\u77b3", "level": 4}, {"id": 14501, "name": "\u5929\u7a7a\u4e4b\u5377", "level": 5}, {"id": 14502, "name": "\u56db\u98ce\u539f\u5178", "level": 5}, {"id": 14504, "name": "\u5c18\u4e16\u4e4b\u9501", "level": 5}, {"id": 14506, "name": "\u4e0d\u706d\u6708\u534e", "level": 5}, {"id": 14509, "name": "\u795e\u4e50\u4e4b\u771f\u610f", "level": 5}, {"id": 15101, "name": "\u730e\u5f13", "level": 1}, {"id": 15201, "name": "\u5386\u7ec3\u7684\u730e\u5f13", "level": 2}, {"id": 15301, "name": "\u9e26\u7fbd\u5f13", "level": 3}, {"id": 15302, "name": "\u795e\u5c04\u624b\u4e4b\u8a93", "level": 3}, {"id": 15303, "name": "\u53cd\u66f2\u5f13", "level": 3}, {"id": 15304, "name": "\u5f39\u5f13", "level": 3}, {"id": 15305, "name": "\u4fe1\u4f7f", "level": 3}, {"id": 15306, "name": "\u9ed1\u6a80\u5f13", "level": 3}, {"id": 15401, "name": "\u897f\u98ce\u730e\u5f13", "level": 4}, {"id": 15402, "name": "\u7edd\u5f26", "level": 4}, {"id": 15403, "name": "\u796d\u793c\u5f13", "level": 4}, {"id": 15404, "name": "\u5b97\u5ba4\u957f\u5f13", "level": 4}, {"id": 15405, "name": "\u5f13\u85cf", "level": 4}, {"id": 15406, "name": "\u8bd5\u4f5c\u6fb9\u6708", "level": 4}, {"id": 15407, "name": "\u94a2\u8f6e\u5f13", "level": 4}, {"id": 15408, "name": "\u9ed1\u5ca9\u6218\u5f13", "level": 4}, {"id": 15409, "name": "\u82cd\u7fe0\u730e\u5f13", "level": 4}, {"id": 15410, "name": "\u6697\u5df7\u730e\u624b", "level": 4}, {"id": 15412, "name": "\u5e7d\u591c\u534e\u5c14\u5179", "level": 4}, {"id": 15413, "name": "\u98ce\u82b1\u4e4b\u9882", "level": 4}, {"id": 15414, "name": "\u7834\u9b54\u4e4b\u5f13", "level": 4}, {"id": 15415, "name": "\u63a0\u98df\u8005", "level": 4}, {"id": 15416, "name": "\u66da\u4e91\u4e4b\u6708", "level": 4}, {"id": 15501, "name": "\u5929\u7a7a\u4e4b\u7ffc", "level": 5}, {"id": 15502, "name": "\u963f\u83ab\u65af\u4e4b\u5f13", "level": 5}, {"id": 15503, "name": "\u7ec8\u672b\u55df\u53f9\u4e4b\u8bd7", "level": 5}, {"id": 15507, "name": "\u51ac\u6781\u767d\u661f", "level": 5}, {"id": 15509, "name": "\u98de\u96f7\u4e4b\u5f26\u632f", "level": 5}, {"id": 20001, "name": "(test)\u7aff\u6d4b\u8bd5", "level": 5}, {"id": 10002, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}, {"id": 10003, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}, {"id": 10004, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}, {"id": 10005, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}, {"id": 10006, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}, {"id": 10008, "name": "(test)\u7a7f\u6a21\u6d4b\u8bd5", "level": 1}]`);
var avatar_list = JSON.parse(`[{"id": "10000001", "name": "\\u51ef\\u7279", "element": "Electric"}, {"id": "10000002", "name": "\\u795e\\u91cc\\u7eeb\\u534e", "element": "Ice"}, {"id": "10000003", "name": "\\u7434", "element": "Wind"}, {"id": "10000006", "name": "\\u4e3d\\u838e", "element": "Electric"}, {"id": "10000014", "name": "\\u82ad\\u82ad\\u62c9", "element": "Water"}, {"id": "10000015", "name": "\\u51ef\\u4e9a", "element": "Ice"}, {"id": "10000016", "name": "\\u8fea\\u5362\\u514b", "element": "Fire"}, {"id": "10000020", "name": "\\u96f7\\u6cfd", "element": "Electric"}, {"id": "10000021", "name": "\\u5b89\\u67cf", "element": "Fire"}, {"id": "10000022", "name": "\\u6e29\\u8fea", "element": "Wind"}, {"id": "10000023", "name": "\\u9999\\u83f1", "element": "Fire"}, {"id": "10000024", "name": "\\u5317\\u6597", "element": "Electric"}, {"id": "10000025", "name": "\\u884c\\u79cb", "element": "Water"}, {"id": "10000026", "name": "\\u9b48", "element": "Wind"}, {"id": "10000027", "name": "\\u51dd\\u5149", "element": "Rock"}, {"id": "10000029", "name": "\\u53ef\\u8389", "element": "Fire"}, {"id": "10000030", "name": "\\u949f\\u79bb", "element": "Rock"}, {"id": "10000031", "name": "\\u83f2\\u8c22\\u5c14", "element": "Electric"}, {"id": "10000032", "name": "\\u73ed\\u5c3c\\u7279", "element": "Fire"}, {"id": "10000033", "name": "\\u8fbe\\u8fbe\\u5229\\u4e9a", "element": "Water"}, {"id": "10000034", "name": "\\u8bfa\\u827e\\u5c14", "element": "Rock"}, {"id": "10000035", "name": "\\u4e03\\u4e03", "element": "Ice"}, {"id": "10000036", "name": "\\u91cd\\u4e91", "element": "Ice"}, {"id": "10000037", "name": "\\u7518\\u96e8", "element": "Ice"}, {"id": "10000038", "name": "\\u963f\\u8d1d\\u591a", "element": "Rock"}, {"id": "10000039", "name": "\\u8fea\\u5965\\u5a1c", "element": "Ice"}, {"id": "10000041", "name": "\\u83ab\\u5a1c", "element": "Water"}, {"id": "10000042", "name": "\\u523b\\u6674", "element": "Electric"}, {"id": "10000043", "name": "\\u7802\\u7cd6", "element": "Wind"}, {"id": "10000044", "name": "\\u8f9b\\u7131", "element": "Fire"}, {"id": "10000045", "name": "\\u7f57\\u838e\\u8389\\u4e9a", "element": "Ice"}, {"id": "10000046", "name": "\\u80e1\\u6843", "element": "Fire"}, {"id": "10000047", "name": "\\u67ab\\u539f\\u4e07\\u53f6", "element": "Wind"}, {"id": "10000048", "name": "\\u70df\\u7eef", "element": "Fire"}, {"id": "10000049", "name": "\\u5bb5\\u5bab", "element": "Fire"}, {"id": "10000050", "name": "\\u6258\\u9a6c", "element": "Fire"}, {"id": "10000051", "name": "\\u4f18\\u83c8", "element": "Ice"}, {"id": "10000052", "name": "\\u96f7\\u7535\\u5c06\\u519b", "element": "Electric"}, {"id": "10000053", "name": "\\u65e9\\u67da", "element": "Wind"}, {"id": "10000054", "name": "\\u73ca\\u745a\\u5bab\\u5fc3\\u6d77", "element": "Water"}, {"id": "10000055", "name": "\\u4e94\\u90ce", "element": "Rock"}, {"id": "10000056", "name": "\\u4e5d\\u6761\\u88df\\u7f57", "element": "Electric"}, {"id": "10000057", "name": "\\u8352\\u6cf7\\u4e00\\u6597", "element": "Rock"}, {"id": "10000058", "name": "\\u516b\\u91cd\\u795e\\u5b50", "element": "Electric"}, {"id": "10000062", "name": "\\u57c3\\u6d1b\\u4f0a", "element": "Ice"}, {"id": "10000063", "name": "\\u7533\\u9e64", "element": "Ice"}, {"id": "10000064", "name": "\\u4e91\\u5807", "element": "Rock"}, {"id": "10000066", "name": "\\u795e\\u91cc\\u7eeb\\u4eba", "element": "Water"}]`);
var reli_list = JSON.parse(`[{"id": 10001, "name": "\\u884c\\u8005\\u4e4b\\u5fc3", "contains": {"3": [{"id": 51310, "name": "\\u5f02\\u56fd\\u4e4b\\u76cf", "main": 5000, "append": 301}, {"id": 51320, "name": "\\u5f52\\u4e61\\u4e4b\\u7fbd", "main": 2000, "append": 301}, {"id": 51330, "name": "\\u611f\\u522b\\u4e4b\\u51a0", "main": 3000, "append": 301}, {"id": 51340, "name": "\\u6545\\u4eba\\u4e4b\\u5fc3", "main": 4000, "append": 301}, {"id": 51350, "name": "\\u9010\\u5149\\u4e4b\\u77f3", "main": 1000, "append": 301}], "4": [{"id": 51410, "name": "\\u5f02\\u56fd\\u4e4b\\u76cf", "main": 5000, "append": 401}, {"id": 51420, "name": "\\u5f52\\u4e61\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 51430, "name": "\\u611f\\u522b\\u4e4b\\u51a0", "main": 3000, "append": 401}, {"id": 51440, "name": "\\u6545\\u4eba\\u4e4b\\u5fc3", "main": 4000, "append": 401}, {"id": 51450, "name": "\\u9010\\u5149\\u4e4b\\u77f3", "main": 1000, "append": 401}]}}, {"id": 10002, "name": "\\u52c7\\u58eb\\u4e4b\\u5fc3", "contains": {"3": [{"id": 52310, "name": "\\u52c7\\u58eb\\u7684\\u58ee\\u884c", "main": 5000, "append": 301}, {"id": 52320, "name": "\\u52c7\\u58eb\\u7684\\u671f\\u8bb8", "main": 2000, "append": 301}, {"id": 52330, "name": "\\u52c7\\u58eb\\u7684\\u51a0\\u5195", "main": 3000, "append": 301}, {"id": 52340, "name": "\\u52c7\\u58eb\\u7684\\u52cb\\u7ae0", "main": 4000, "append": 301}, {"id": 52350, "name": "\\u52c7\\u58eb\\u7684\\u575a\\u6bc5", "main": 1000, "append": 301}], "4": [{"id": 52410, "name": "\\u52c7\\u58eb\\u7684\\u58ee\\u884c", "main": 5000, "append": 401}, {"id": 52420, "name": "\\u52c7\\u58eb\\u7684\\u671f\\u8bb8", "main": 2000, "append": 401}, {"id": 52430, "name": "\\u52c7\\u58eb\\u7684\\u51a0\\u5195", "main": 3000, "append": 401}, {"id": 52440, "name": "\\u52c7\\u58eb\\u7684\\u52cb\\u7ae0", "main": 4000, "append": 401}, {"id": 52450, "name": "\\u52c7\\u58eb\\u7684\\u575a\\u6bc5", "main": 1000, "append": 401}]}}, {"id": 10003, "name": "\\u5b88\\u62a4\\u4e4b\\u5fc3", "contains": {"3": [{"id": 53310, "name": "\\u5b88\\u62a4\\u4e4b\\u76bf", "main": 5000, "append": 301}, {"id": 53320, "name": "\\u5b88\\u62a4\\u5fbd\\u5370", "main": 2000, "append": 301}, {"id": 53330, "name": "\\u5b88\\u62a4\\u675f\\u5e26", "main": 3000, "append": 301}, {"id": 53340, "name": "\\u5b88\\u62a4\\u4e4b\\u82b1", "main": 4000, "append": 301}, {"id": 53350, "name": "\\u5b88\\u62a4\\u5ea7\\u949f", "main": 1000, "append": 301}], "4": [{"id": 53410, "name": "\\u5b88\\u62a4\\u4e4b\\u76bf", "main": 5000, "append": 401}, {"id": 53420, "name": "\\u5b88\\u62a4\\u5fbd\\u5370", "main": 2000, "append": 401}, {"id": 53430, "name": "\\u5b88\\u62a4\\u675f\\u5e26", "main": 3000, "append": 401}, {"id": 53440, "name": "\\u5b88\\u62a4\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 53450, "name": "\\u5b88\\u62a4\\u5ea7\\u949f", "main": 1000, "append": 401}]}}, {"id": 10004, "name": "\\u5947\\u8ff9", "contains": {"3": [{"id": 54310, "name": "\\u5947\\u8ff9\\u4e4b\\u676f", "main": 5000, "append": 301}, {"id": 54320, "name": "\\u5947\\u8ff9\\u4e4b\\u7fbd", "main": 2000, "append": 301}, {"id": 54330, "name": "\\u5947\\u8ff9\\u8033\\u5760", "main": 3000, "append": 301}, {"id": 54340, "name": "\\u5947\\u8ff9\\u4e4b\\u82b1", "main": 4000, "append": 301}, {"id": 54350, "name": "\\u5947\\u8ff9\\u4e4b\\u6c99", "main": 1000, "append": 301}], "4": [{"id": 54410, "name": "\\u5947\\u8ff9\\u4e4b\\u676f", "main": 5000, "append": 401}, {"id": 54420, "name": "\\u5947\\u8ff9\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 54430, "name": "\\u5947\\u8ff9\\u8033\\u5760", "main": 3000, "append": 401}, {"id": 54440, "name": "\\u5947\\u8ff9\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 54450, "name": "\\u5947\\u8ff9\\u4e4b\\u6c99", "main": 1000, "append": 401}]}}, {"id": 10005, "name": "\\u6218\\u72c2", "contains": {"3": [{"id": 55310, "name": "\\u6218\\u72c2\\u7684\\u9aa8\\u676f", "main": 5000, "append": 301}, {"id": 55320, "name": "\\u6218\\u72c2\\u7684\\u7fce\\u7fbd", "main": 2000, "append": 301}, {"id": 55330, "name": "\\u6218\\u72c2\\u7684\\u9b3c\\u9762", "main": 3000, "append": 301}, {"id": 55340, "name": "\\u6218\\u72c2\\u7684\\u8537\\u8587", "main": 4000, "append": 301}, {"id": 55350, "name": "\\u6218\\u72c2\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 301}], "4": [{"id": 55410, "name": "\\u6218\\u72c2\\u7684\\u9aa8\\u676f", "main": 5000, "append": 401}, {"id": 55420, "name": "\\u6218\\u72c2\\u7684\\u7fce\\u7fbd", "main": 2000, "append": 401}, {"id": 55430, "name": "\\u6218\\u72c2\\u7684\\u9b3c\\u9762", "main": 3000, "append": 401}, {"id": 55440, "name": "\\u6218\\u72c2\\u7684\\u8537\\u8587", "main": 4000, "append": 401}, {"id": 55450, "name": "\\u6218\\u72c2\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 401}]}}, {"id": 10006, "name": "\\u6b66\\u4eba", "contains": {"3": [{"id": 56310, "name": "\\u6b66\\u4eba\\u7684\\u9152\\u676f", "main": 5000, "append": 301}, {"id": 56320, "name": "\\u6b66\\u4eba\\u7684\\u7fbd\\u9970", "main": 2000, "append": 301}, {"id": 56330, "name": "\\u6b66\\u4eba\\u7684\\u5934\\u5dfe", "main": 3000, "append": 301}, {"id": 56340, "name": "\\u6b66\\u4eba\\u7684\\u7ea2\\u82b1", "main": 4000, "append": 301}, {"id": 56350, "name": "\\u6b66\\u4eba\\u7684\\u6c34\\u6f0f", "main": 1000, "append": 301}], "4": [{"id": 56410, "name": "\\u6b66\\u4eba\\u7684\\u9152\\u676f", "main": 5000, "append": 401}, {"id": 56420, "name": "\\u6b66\\u4eba\\u7684\\u7fbd\\u9970", "main": 2000, "append": 401}, {"id": 56430, "name": "\\u6b66\\u4eba\\u7684\\u5934\\u5dfe", "main": 3000, "append": 401}, {"id": 56440, "name": "\\u6b66\\u4eba\\u7684\\u7ea2\\u82b1", "main": 4000, "append": 401}, {"id": 56450, "name": "\\u6b66\\u4eba\\u7684\\u6c34\\u6f0f", "main": 1000, "append": 401}]}}, {"id": 10007, "name": "\\u6559\\u5b98", "contains": {"3": [{"id": 57310, "name": "\\u6559\\u5b98\\u7684\\u8336\\u676f", "main": 5000, "append": 301}, {"id": 57320, "name": "\\u6559\\u5b98\\u7684\\u7fbd\\u9970", "main": 2000, "append": 301}, {"id": 57330, "name": "\\u6559\\u5b98\\u7684\\u5e3d\\u5b50", "main": 3000, "append": 301}, {"id": 57340, "name": "\\u6559\\u5b98\\u7684\\u80f8\\u82b1", "main": 4000, "append": 301}, {"id": 57350, "name": "\\u6559\\u5b98\\u7684\\u6000\\u8868", "main": 1000, "append": 301}], "4": [{"id": 57410, "name": "\\u6559\\u5b98\\u7684\\u8336\\u676f", "main": 5000, "append": 401}, {"id": 57420, "name": "\\u6559\\u5b98\\u7684\\u7fbd\\u9970", "main": 2000, "append": 401}, {"id": 57430, "name": "\\u6559\\u5b98\\u7684\\u5e3d\\u5b50", "main": 3000, "append": 401}, {"id": 57440, "name": "\\u6559\\u5b98\\u7684\\u80f8\\u82b1", "main": 4000, "append": 401}, {"id": 57450, "name": "\\u6559\\u5b98\\u7684\\u6000\\u8868", "main": 1000, "append": 401}]}}, {"id": 10008, "name": "\\u8d4c\\u5f92", "contains": {"3": [{"id": 58310, "name": "\\u8d4c\\u5f92\\u7684\\u9ab0\\u76c5", "main": 5000, "append": 301}, {"id": 58320, "name": "\\u8d4c\\u5f92\\u7684\\u7fbd\\u9970", "main": 2000, "append": 301}, {"id": 58330, "name": "\\u8d4c\\u5f92\\u7684\\u8033\\u73af", "main": 3000, "append": 301}, {"id": 58340, "name": "\\u8d4c\\u5f92\\u7684\\u80f8\\u82b1", "main": 4000, "append": 301}, {"id": 58350, "name": "\\u8d4c\\u5f92\\u7684\\u6000\\u8868", "main": 1000, "append": 301}], "4": [{"id": 58410, "name": "\\u8d4c\\u5f92\\u7684\\u9ab0\\u76c5", "main": 5000, "append": 401}, {"id": 58420, "name": "\\u8d4c\\u5f92\\u7684\\u7fbd\\u9970", "main": 2000, "append": 401}, {"id": 58430, "name": "\\u8d4c\\u5f92\\u7684\\u8033\\u73af", "main": 3000, "append": 401}, {"id": 58440, "name": "\\u8d4c\\u5f92\\u7684\\u80f8\\u82b1", "main": 4000, "append": 401}, {"id": 58450, "name": "\\u8d4c\\u5f92\\u7684\\u6000\\u8868", "main": 1000, "append": 401}]}}, {"id": 10009, "name": "\\u6d41\\u653e\\u8005", "contains": {"3": [{"id": 59310, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u676f", "main": 5000, "append": 301}, {"id": 59320, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u7fbd", "main": 2000, "append": 301}, {"id": 59330, "name": "\\u6d41\\u653e\\u8005\\u5934\\u51a0", "main": 3000, "append": 301}, {"id": 59340, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u82b1", "main": 4000, "append": 301}, {"id": 59350, "name": "\\u6d41\\u653e\\u8005\\u6000\\u8868", "main": 1000, "append": 301}], "4": [{"id": 59410, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u676f", "main": 5000, "append": 401}, {"id": 59420, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 59430, "name": "\\u6d41\\u653e\\u8005\\u5934\\u51a0", "main": 3000, "append": 401}, {"id": 59440, "name": "\\u6d41\\u653e\\u8005\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 59450, "name": "\\u6d41\\u653e\\u8005\\u6000\\u8868", "main": 1000, "append": 401}]}}, {"id": 10010, "name": "\\u5192\\u9669\\u5bb6", "contains": {"1": [{"id": 60110, "name": "\\u5192\\u9669\\u5bb6\\u91d1\\u676f", "main": 5000, "append": 101}, {"id": 60120, "name": "\\u5192\\u9669\\u5bb6\\u5c3e\\u7fbd", "main": 2000, "append": 101}, {"id": 60130, "name": "\\u5192\\u9669\\u5bb6\\u5934\\u5e26", "main": 3000, "append": 101}, {"id": 60140, "name": "\\u5192\\u9669\\u5bb6\\u4e4b\\u82b1", "main": 4000, "append": 101}, {"id": 60150, "name": "\\u5192\\u9669\\u5bb6\\u6000\\u8868", "main": 1000, "append": 101}], "2": [{"id": 60210, "name": "\\u5192\\u9669\\u5bb6\\u91d1\\u676f", "main": 5000, "append": 201}, {"id": 60220, "name": "\\u5192\\u9669\\u5bb6\\u5c3e\\u7fbd", "main": 2000, "append": 201}, {"id": 60230, "name": "\\u5192\\u9669\\u5bb6\\u5934\\u5e26", "main": 3000, "append": 201}, {"id": 60240, "name": "\\u5192\\u9669\\u5bb6\\u4e4b\\u82b1", "main": 4000, "append": 201}, {"id": 60250, "name": "\\u5192\\u9669\\u5bb6\\u6000\\u8868", "main": 1000, "append": 201}], "3": [{"id": 60310, "name": "\\u5192\\u9669\\u5bb6\\u91d1\\u676f", "main": 5000, "append": 301}, {"id": 60320, "name": "\\u5192\\u9669\\u5bb6\\u5c3e\\u7fbd", "main": 2000, "append": 301}, {"id": 60330, "name": "\\u5192\\u9669\\u5bb6\\u5934\\u5e26", "main": 3000, "append": 301}, {"id": 60340, "name": "\\u5192\\u9669\\u5bb6\\u4e4b\\u82b1", "main": 4000, "append": 301}, {"id": 60350, "name": "\\u5192\\u9669\\u5bb6\\u6000\\u8868", "main": 1000, "append": 301}]}}, {"id": 10011, "name": "\\u5e78\\u8fd0\\u513f", "contains": {"1": [{"id": 61110, "name": "\\u5e78\\u8fd0\\u513f\\u4e4b\\u676f", "main": 5000, "append": 101}, {"id": 61120, "name": "\\u5e78\\u8fd0\\u513f\\u9e70\\u7fbd", "main": 2000, "append": 101}, {"id": 61130, "name": "\\u5e78\\u8fd0\\u513f\\u94f6\\u51a0", "main": 3000, "append": 101}, {"id": 61140, "name": "\\u5e78\\u8fd0\\u513f\\u7eff\\u82b1", "main": 4000, "append": 101}, {"id": 61150, "name": "\\u5e78\\u8fd0\\u513f\\u6c99\\u6f0f", "main": 1000, "append": 101}], "2": [{"id": 61210, "name": "\\u5e78\\u8fd0\\u513f\\u4e4b\\u676f", "main": 5000, "append": 201}, {"id": 61220, "name": "\\u5e78\\u8fd0\\u513f\\u9e70\\u7fbd", "main": 2000, "append": 201}, {"id": 61230, "name": "\\u5e78\\u8fd0\\u513f\\u94f6\\u51a0", "main": 3000, "append": 201}, {"id": 61240, "name": "\\u5e78\\u8fd0\\u513f\\u7eff\\u82b1", "main": 4000, "append": 201}, {"id": 61250, "name": "\\u5e78\\u8fd0\\u513f\\u6c99\\u6f0f", "main": 1000, "append": 201}], "3": [{"id": 61310, "name": "\\u5e78\\u8fd0\\u513f\\u4e4b\\u676f", "main": 5000, "append": 301}, {"id": 61320, "name": "\\u5e78\\u8fd0\\u513f\\u9e70\\u7fbd", "main": 2000, "append": 301}, {"id": 61330, "name": "\\u5e78\\u8fd0\\u513f\\u94f6\\u51a0", "main": 3000, "append": 301}, {"id": 61340, "name": "\\u5e78\\u8fd0\\u513f\\u7eff\\u82b1", "main": 4000, "append": 301}, {"id": 61350, "name": "\\u5e78\\u8fd0\\u513f\\u6c99\\u6f0f", "main": 1000, "append": 301}]}}, {"id": 10012, "name": "\\u5b66\\u58eb", "contains": {"3": [{"id": 62310, "name": "\\u5b66\\u58eb\\u7684\\u58a8\\u676f", "main": 5000, "append": 301}, {"id": 62320, "name": "\\u5b66\\u58eb\\u7684\\u7fbd\\u7b14", "main": 2000, "append": 301}, {"id": 62330, "name": "\\u5b66\\u58eb\\u7684\\u955c\\u7247", "main": 3000, "append": 301}, {"id": 62340, "name": "\\u5b66\\u58eb\\u7684\\u4e66\\u7b7e", "main": 4000, "append": 301}, {"id": 62350, "name": "\\u5b66\\u58eb\\u7684\\u65f6\\u949f", "main": 1000, "append": 301}], "4": [{"id": 62410, "name": "\\u5b66\\u58eb\\u7684\\u58a8\\u676f", "main": 5000, "append": 401}, {"id": 62420, "name": "\\u5b66\\u58eb\\u7684\\u7fbd\\u7b14", "main": 2000, "append": 401}, {"id": 62430, "name": "\\u5b66\\u58eb\\u7684\\u955c\\u7247", "main": 3000, "append": 401}, {"id": 62440, "name": "\\u5b66\\u58eb\\u7684\\u4e66\\u7b7e", "main": 4000, "append": 401}, {"id": 62450, "name": "\\u5b66\\u58eb\\u7684\\u65f6\\u949f", "main": 1000, "append": 401}]}}, {"id": 10013, "name": "\\u6e38\\u533b", "contains": {"1": [{"id": 63110, "name": "\\u6e38\\u533b\\u7684\\u836f\\u58f6", "main": 5000, "append": 101}, {"id": 63120, "name": "\\u6e38\\u533b\\u7684\\u67ad\\u7fbd", "main": 2000, "append": 101}, {"id": 63130, "name": "\\u6e38\\u533b\\u7684\\u65b9\\u5dfe", "main": 3000, "append": 101}, {"id": 63140, "name": "\\u6e38\\u533b\\u7684\\u94f6\\u83b2", "main": 4000, "append": 101}, {"id": 63150, "name": "\\u6e38\\u533b\\u7684\\u6000\\u949f", "main": 1000, "append": 101}], "2": [{"id": 63210, "name": "\\u6e38\\u533b\\u7684\\u836f\\u58f6", "main": 5000, "append": 201}, {"id": 63220, "name": "\\u6e38\\u533b\\u7684\\u67ad\\u7fbd", "main": 2000, "append": 201}, {"id": 63230, "name": "\\u6e38\\u533b\\u7684\\u65b9\\u5dfe", "main": 3000, "append": 201}, {"id": 63240, "name": "\\u6e38\\u533b\\u7684\\u94f6\\u83b2", "main": 4000, "append": 201}, {"id": 63250, "name": "\\u6e38\\u533b\\u7684\\u6000\\u949f", "main": 1000, "append": 201}], "3": [{"id": 63310, "name": "\\u6e38\\u533b\\u7684\\u836f\\u58f6", "main": 5000, "append": 301}, {"id": 63320, "name": "\\u6e38\\u533b\\u7684\\u67ad\\u7fbd", "main": 2000, "append": 301}, {"id": 63330, "name": "\\u6e38\\u533b\\u7684\\u65b9\\u5dfe", "main": 3000, "append": 301}, {"id": 63340, "name": "\\u6e38\\u533b\\u7684\\u94f6\\u83b2", "main": 4000, "append": 301}, {"id": 63350, "name": "\\u6e38\\u533b\\u7684\\u6000\\u949f", "main": 1000, "append": 301}]}}, {"id": 14001, "name": "\\u51b0\\u98ce\\u8ff7\\u9014\\u7684\\u52c7\\u58eb", "contains": {"4": [{"id": 71410, "name": "\\u904d\\u7ed3\\u5bd2\\u971c\\u7684\\u50b2\\u9aa8", "main": 5000, "append": 401}, {"id": 71420, "name": "\\u6467\\u51b0\\u800c\\u884c\\u7684\\u6267\\u671b", "main": 2000, "append": 401}, {"id": 71430, "name": "\\u7834\\u51b0\\u8e0f\\u96ea\\u7684\\u56de\\u97f3", "main": 3000, "append": 401}, {"id": 71440, "name": "\\u5386\\u7ecf\\u98ce\\u96ea\\u7684\\u601d\\u5ff5", "main": 4000, "append": 401}, {"id": 71450, "name": "\\u51b0\\u96ea\\u6545\\u56ed\\u7684\\u7ec8\\u671f", "main": 1000, "append": 401}], "5": [{"id": 71510, "name": "\\u904d\\u7ed3\\u5bd2\\u971c\\u7684\\u50b2\\u9aa8", "main": 5000, "append": 501}, {"id": 71520, "name": "\\u6467\\u51b0\\u800c\\u884c\\u7684\\u6267\\u671b", "main": 2000, "append": 501}, {"id": 71530, "name": "\\u7834\\u51b0\\u8e0f\\u96ea\\u7684\\u56de\\u97f3", "main": 3000, "append": 501}, {"id": 71540, "name": "\\u5386\\u7ecf\\u98ce\\u96ea\\u7684\\u601d\\u5ff5", "main": 4000, "append": 501}, {"id": 71550, "name": "\\u51b0\\u96ea\\u6545\\u56ed\\u7684\\u7ec8\\u671f", "main": 1000, "append": 501}]}}, {"id": 14002, "name": "\\u5e73\\u606f\\u9e23\\u96f7\\u7684\\u5c0a\\u8005", "contains": {"4": [{"id": 72410, "name": "\\u5e73\\u96f7\\u4e4b\\u5668", "main": 5000, "append": 401}, {"id": 72420, "name": "\\u5e73\\u96f7\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 72430, "name": "\\u5e73\\u96f7\\u4e4b\\u51a0", "main": 3000, "append": 401}, {"id": 72440, "name": "\\u5e73\\u96f7\\u4e4b\\u5fc3", "main": 4000, "append": 401}, {"id": 72450, "name": "\\u5e73\\u96f7\\u4e4b\\u523b", "main": 1000, "append": 401}], "5": [{"id": 72510, "name": "\\u5e73\\u96f7\\u4e4b\\u5668", "main": 5000, "append": 501}, {"id": 72520, "name": "\\u5e73\\u96f7\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 72530, "name": "\\u5e73\\u96f7\\u4e4b\\u51a0", "main": 3000, "append": 501}, {"id": 72540, "name": "\\u5e73\\u96f7\\u4e4b\\u5fc3", "main": 4000, "append": 501}, {"id": 72550, "name": "\\u5e73\\u96f7\\u4e4b\\u523b", "main": 1000, "append": 501}]}}, {"id": 14003, "name": "\\u6e21\\u8fc7\\u70c8\\u706b\\u7684\\u8d24\\u4eba", "contains": {"4": [{"id": 73410, "name": "\\u6e21\\u706b\\u8005\\u7684\\u9192\\u609f", "main": 5000, "append": 401}, {"id": 73420, "name": "\\u6e21\\u706b\\u8005\\u7684\\u89e3\\u8131", "main": 2000, "append": 401}, {"id": 73430, "name": "\\u6e21\\u706b\\u8005\\u7684\\u667a\\u6167", "main": 3000, "append": 401}, {"id": 73440, "name": "\\u6e21\\u706b\\u8005\\u7684\\u51b3\\u7edd", "main": 4000, "append": 401}, {"id": 73450, "name": "\\u6e21\\u706b\\u8005\\u7684\\u714e\\u71ac", "main": 1000, "append": 401}], "5": [{"id": 73510, "name": "\\u6e21\\u706b\\u8005\\u7684\\u9192\\u609f", "main": 5000, "append": 501}, {"id": 73520, "name": "\\u6e21\\u706b\\u8005\\u7684\\u89e3\\u8131", "main": 2000, "append": 501}, {"id": 73530, "name": "\\u6e21\\u706b\\u8005\\u7684\\u667a\\u6167", "main": 3000, "append": 501}, {"id": 73540, "name": "\\u6e21\\u706b\\u8005\\u7684\\u51b3\\u7edd", "main": 4000, "append": 501}, {"id": 73550, "name": "\\u6e21\\u706b\\u8005\\u7684\\u714e\\u71ac", "main": 1000, "append": 501}]}}, {"id": 14004, "name": "\\u88ab\\u601c\\u7231\\u7684\\u5c11\\u5973", "contains": {"4": [{"id": 74410, "name": "\\u5c11\\u5973\\u7247\\u523b\\u7684\\u95f2\\u6687", "main": 5000, "append": 401}, {"id": 74420, "name": "\\u5c11\\u5973\\u98d8\\u6447\\u7684\\u601d\\u5ff5", "main": 2000, "append": 401}, {"id": 74430, "name": "\\u5c11\\u5973\\u6613\\u901d\\u7684\\u82b3\\u989c", "main": 3000, "append": 401}, {"id": 74440, "name": "\\u8fdc\\u65b9\\u7684\\u5c11\\u5973\\u4e4b\\u5fc3", "main": 4000, "append": 401}, {"id": 74450, "name": "\\u5c11\\u5973\\u82e6\\u77ed\\u7684\\u826f\\u8fb0", "main": 1000, "append": 401}], "5": [{"id": 74510, "name": "\\u5c11\\u5973\\u7247\\u523b\\u7684\\u95f2\\u6687", "main": 5000, "append": 501}, {"id": 74520, "name": "\\u5c11\\u5973\\u98d8\\u6447\\u7684\\u601d\\u5ff5", "main": 2000, "append": 501}, {"id": 74530, "name": "\\u5c11\\u5973\\u6613\\u901d\\u7684\\u82b3\\u989c", "main": 3000, "append": 501}, {"id": 74540, "name": "\\u8fdc\\u65b9\\u7684\\u5c11\\u5973\\u4e4b\\u5fc3", "main": 4000, "append": 501}, {"id": 74550, "name": "\\u5c11\\u5973\\u82e6\\u77ed\\u7684\\u826f\\u8fb0", "main": 1000, "append": 501}]}}, {"id": 15001, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u7ec8\\u5e55\\u793c", "contains": {"4": [{"id": 75410, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u9163\\u9189", "main": 5000, "append": 401}, {"id": 75420, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u5f52\\u5bbf", "main": 2000, "append": 401}, {"id": 75430, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u51ef\\u65cb", "main": 3000, "append": 401}, {"id": 75440, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u7559\\u604b", "main": 4000, "append": 401}, {"id": 75450, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u5e0c\\u5180", "main": 1000, "append": 401}], "5": [{"id": 75510, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u9163\\u9189", "main": 5000, "append": 501}, {"id": 75520, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u5f52\\u5bbf", "main": 2000, "append": 501}, {"id": 75530, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u51ef\\u65cb", "main": 3000, "append": 501}, {"id": 75540, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u7559\\u604b", "main": 4000, "append": 501}, {"id": 75550, "name": "\\u89d2\\u6597\\u58eb\\u7684\\u5e0c\\u5180", "main": 1000, "append": 501}]}}, {"id": 15002, "name": "\\u7fe0\\u7eff\\u4e4b\\u5f71", "contains": {"4": [{"id": 76410, "name": "\\u7fe0\\u7eff\\u730e\\u4eba\\u7684\\u5bb9\\u5668", "main": 5000, "append": 401}, {"id": 76420, "name": "\\u730e\\u4eba\\u9752\\u7fe0\\u7684\\u7bad\\u7fbd", "main": 2000, "append": 401}, {"id": 76430, "name": "\\u7fe0\\u7eff\\u7684\\u730e\\u4eba\\u4e4b\\u51a0", "main": 3000, "append": 401}, {"id": 76440, "name": "\\u91ce\\u82b1\\u8bb0\\u5fc6\\u7684\\u7eff\\u91ce", "main": 4000, "append": 401}, {"id": 76450, "name": "\\u7fe0\\u7eff\\u730e\\u4eba\\u7684\\u7b03\\u5b9a", "main": 1000, "append": 401}], "5": [{"id": 76510, "name": "\\u7fe0\\u7eff\\u730e\\u4eba\\u7684\\u5bb9\\u5668", "main": 5000, "append": 501}, {"id": 76520, "name": "\\u730e\\u4eba\\u9752\\u7fe0\\u7684\\u7bad\\u7fbd", "main": 2000, "append": 501}, {"id": 76530, "name": "\\u7fe0\\u7eff\\u7684\\u730e\\u4eba\\u4e4b\\u51a0", "main": 3000, "append": 501}, {"id": 76540, "name": "\\u91ce\\u82b1\\u8bb0\\u5fc6\\u7684\\u7eff\\u91ce", "main": 4000, "append": 501}, {"id": 76550, "name": "\\u7fe0\\u7eff\\u730e\\u4eba\\u7684\\u7b03\\u5b9a", "main": 1000, "append": 501}]}}, {"id": 15003, "name": "\\u6d41\\u6d6a\\u5927\\u5730\\u7684\\u4e50\\u56e2", "contains": {"4": [{"id": 77410, "name": "\\u541f\\u6e38\\u8005\\u4e4b\\u58f6", "main": 5000, "append": 401}, {"id": 77420, "name": "\\u7434\\u5e08\\u7684\\u7bad\\u7fbd", "main": 2000, "append": 401}, {"id": 77430, "name": "\\u6307\\u6325\\u7684\\u793c\\u5e3d", "main": 3000, "append": 401}, {"id": 77440, "name": "\\u4e50\\u56e2\\u7684\\u6668\\u5149", "main": 4000, "append": 401}, {"id": 77450, "name": "\\u7ec8\\u5e55\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 401}], "5": [{"id": 77510, "name": "\\u541f\\u6e38\\u8005\\u4e4b\\u58f6", "main": 5000, "append": 501}, {"id": 77520, "name": "\\u7434\\u5e08\\u7684\\u7bad\\u7fbd", "main": 2000, "append": 501}, {"id": 77530, "name": "\\u6307\\u6325\\u7684\\u793c\\u5e3d", "main": 3000, "append": 501}, {"id": 77540, "name": "\\u4e50\\u56e2\\u7684\\u6668\\u5149", "main": 4000, "append": 501}, {"id": 77550, "name": "\\u7ec8\\u5e55\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 501}]}}, {"id": 15004, "name": "\\u51b0\\u4e4b\\u5ddd\\u4e0e\\u96ea\\u4e4b\\u7802", "contains": {"6": [{"id": 78340, "name": "\\u51db\\u51ac\\u971c\\u5fc3", "main": 4000, "append": 301}, {"id": 78320, "name": "\\u96ea\\u85cf\\u4e4b\\u7fbd", "main": 2000, "append": 301}, {"id": 78350, "name": "\\u51dd\\u51b0\\u6210\\u7802", "main": 1000, "append": 301}, {"id": 78310, "name": "\\u5317\\u98ce\\u4e4b\\u76cf", "main": 5000, "append": 301}, {"id": 78330, "name": "\\u51b0\\u6cb3\\u4e4b\\u51a0", "main": 3000, "append": 301}]}}, {"id": 15005, "name": "\\u5982\\u96f7\\u7684\\u76db\\u6012", "contains": {"4": [{"id": 79410, "name": "\\u964d\\u96f7\\u7684\\u51f6\\u5146", "main": 5000, "append": 401}, {"id": 79420, "name": "\\u96f7\\u707e\\u7684\\u5b51\\u9057", "main": 2000, "append": 401}, {"id": 79430, "name": "\\u5524\\u96f7\\u7684\\u5934\\u51a0", "main": 3000, "append": 401}, {"id": 79440, "name": "\\u96f7\\u9e1f\\u7684\\u601c\\u60af", "main": 4000, "append": 401}, {"id": 79450, "name": "\\u96f7\\u9706\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 401}], "5": [{"id": 79510, "name": "\\u964d\\u96f7\\u7684\\u51f6\\u5146", "main": 5000, "append": 501}, {"id": 79520, "name": "\\u96f7\\u707e\\u7684\\u5b51\\u9057", "main": 2000, "append": 501}, {"id": 79530, "name": "\\u5524\\u96f7\\u7684\\u5934\\u51a0", "main": 3000, "append": 501}, {"id": 79540, "name": "\\u96f7\\u9e1f\\u7684\\u601c\\u60af", "main": 4000, "append": 501}, {"id": 79550, "name": "\\u96f7\\u9706\\u7684\\u65f6\\u8ba1", "main": 1000, "append": 501}]}}, {"id": 15006, "name": "\\u70bd\\u70c8\\u7684\\u708e\\u4e4b\\u9b54\\u5973", "contains": {"4": [{"id": 80410, "name": "\\u9b54\\u5973\\u7684\\u5fc3\\u4e4b\\u706b", "main": 5000, "append": 401}, {"id": 80420, "name": "\\u9b54\\u5973\\u5e38\\u71c3\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 80430, "name": "\\u7126\\u707c\\u7684\\u9b54\\u5973\\u5e3d", "main": 3000, "append": 401}, {"id": 80440, "name": "\\u9b54\\u5973\\u7684\\u708e\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 80450, "name": "\\u9b54\\u5973\\u7834\\u706d\\u4e4b\\u65f6", "main": 1000, "append": 401}], "5": [{"id": 80510, "name": "\\u9b54\\u5973\\u7684\\u5fc3\\u4e4b\\u706b", "main": 5000, "append": 501}, {"id": 80520, "name": "\\u9b54\\u5973\\u5e38\\u71c3\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 80530, "name": "\\u7126\\u707c\\u7684\\u9b54\\u5973\\u5e3d", "main": 3000, "append": 501}, {"id": 80540, "name": "\\u9b54\\u5973\\u7684\\u708e\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 80550, "name": "\\u9b54\\u5973\\u7834\\u706d\\u4e4b\\u65f6", "main": 1000, "append": 501}]}}, {"id": 15007, "name": "\\u6614\\u65e5\\u5b97\\u5ba4\\u4e4b\\u4eea", "contains": {"4": [{"id": 81410, "name": "\\u5b97\\u5ba4\\u94f6\\u74ee", "main": 5000, "append": 401}, {"id": 81420, "name": "\\u5b97\\u5ba4\\u4e4b\\u7fce", "main": 2000, "append": 401}, {"id": 81430, "name": "\\u5b97\\u5ba4\\u9762\\u5177", "main": 3000, "append": 401}, {"id": 81440, "name": "\\u5b97\\u5ba4\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 81450, "name": "\\u5b97\\u5ba4\\u65f6\\u8ba1", "main": 1000, "append": 401}], "5": [{"id": 81510, "name": "\\u5b97\\u5ba4\\u94f6\\u74ee", "main": 5000, "append": 501}, {"id": 81520, "name": "\\u5b97\\u5ba4\\u4e4b\\u7fce", "main": 2000, "append": 501}, {"id": 81530, "name": "\\u5b97\\u5ba4\\u9762\\u5177", "main": 3000, "append": 501}, {"id": 81540, "name": "\\u5b97\\u5ba4\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 81550, "name": "\\u5b97\\u5ba4\\u65f6\\u8ba1", "main": 1000, "append": 501}]}}, {"id": 15008, "name": "\\u67d3\\u8840\\u7684\\u9a91\\u58eb\\u9053", "contains": {"4": [{"id": 82410, "name": "\\u67d3\\u8840\\u9a91\\u58eb\\u4e4b\\u676f", "main": 5000, "append": 401}, {"id": 82420, "name": "\\u67d3\\u8840\\u7684\\u9ed1\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 82430, "name": "\\u67d3\\u8840\\u7684\\u94c1\\u5047\\u9762", "main": 3000, "append": 401}, {"id": 82440, "name": "\\u67d3\\u8840\\u7684\\u94c1\\u4e4b\\u5fc3", "main": 4000, "append": 401}, {"id": 82450, "name": "\\u9a91\\u58eb\\u67d3\\u8840\\u4e4b\\u65f6", "main": 1000, "append": 401}], "5": [{"id": 82510, "name": "\\u67d3\\u8840\\u9a91\\u58eb\\u4e4b\\u676f", "main": 5000, "append": 501}, {"id": 82520, "name": "\\u67d3\\u8840\\u7684\\u9ed1\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 82530, "name": "\\u67d3\\u8840\\u7684\\u94c1\\u5047\\u9762", "main": 3000, "append": 501}, {"id": 82540, "name": "\\u67d3\\u8840\\u7684\\u94c1\\u4e4b\\u5fc3", "main": 4000, "append": 501}, {"id": 82550, "name": "\\u9a91\\u58eb\\u67d3\\u8840\\u4e4b\\u65f6", "main": 1000, "append": 501}]}}, {"id": 15009, "name": "\\u796d\\u706b\\u4e4b\\u4eba", "contains": {"3": [{"id": 83330, "name": "\\u796d\\u706b\\u793c\\u51a0", "main": 3000, "append": 301}], "4": [{"id": 83430, "name": "\\u796d\\u706b\\u793c\\u51a0", "main": 3000, "append": 401}]}}, {"id": 15010, "name": "\\u796d\\u6c34\\u4e4b\\u4eba", "contains": {"3": [{"id": 84330, "name": "\\u796d\\u6c34\\u793c\\u51a0", "main": 3000, "append": 301}], "4": [{"id": 84430, "name": "\\u796d\\u6c34\\u793c\\u51a0", "main": 3000, "append": 401}]}}, {"id": 15011, "name": "\\u796d\\u96f7\\u4e4b\\u4eba", "contains": {"3": [{"id": 85330, "name": "\\u796d\\u96f7\\u793c\\u51a0", "main": 3000, "append": 301}], "4": [{"id": 85430, "name": "\\u796d\\u96f7\\u793c\\u51a0", "main": 3000, "append": 401}]}}, {"id": 15012, "name": "\\u796d\\u98ce\\u4e4b\\u4eba", "contains": {"6": [{"id": 86330, "name": "\\u796d\\u98ce\\u793c\\u51a0", "main": 3000, "append": 301}]}}, {"id": 15013, "name": "\\u796d\\u51b0\\u4e4b\\u4eba", "contains": {"3": [{"id": 87330, "name": "\\u796d\\u51b0\\u793c\\u51a0", "main": 3000, "append": 301}], "4": [{"id": 87430, "name": "\\u796d\\u51b0\\u793c\\u51a0", "main": 3000, "append": 401}]}}, {"id": 15014, "name": "\\u60a0\\u53e4\\u7684\\u78d0\\u5ca9", "contains": {"4": [{"id": 88410, "name": "\\u5dc9\\u5ca9\\u7422\\u5851\\u4e4b\\u6a3d", "main": 5000, "append": 401}, {"id": 88420, "name": "\\u5d6f\\u5ce8\\u7fa4\\u5cf0\\u4e4b\\u7ffc", "main": 2000, "append": 401}, {"id": 88430, "name": "\\u4e0d\\u52a8\\u7384\\u77f3\\u4e4b\\u76f8", "main": 3000, "append": 401}, {"id": 88440, "name": "\\u78d0\\u9640\\u88c2\\u751f\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 88450, "name": "\\u661f\\u7f57\\u572d\\u74a7\\u4e4b\\u6677", "main": 1000, "append": 401}], "5": [{"id": 88510, "name": "\\u5dc9\\u5ca9\\u7422\\u5851\\u4e4b\\u6a3d", "main": 5000, "append": 501}, {"id": 88520, "name": "\\u5d6f\\u5ce8\\u7fa4\\u5cf0\\u4e4b\\u7ffc", "main": 2000, "append": 501}, {"id": 88530, "name": "\\u4e0d\\u52a8\\u7384\\u77f3\\u4e4b\\u76f8", "main": 3000, "append": 501}, {"id": 88540, "name": "\\u78d0\\u9640\\u88c2\\u751f\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 88550, "name": "\\u661f\\u7f57\\u572d\\u74a7\\u4e4b\\u6677", "main": 1000, "append": 501}]}}, {"id": 15015, "name": "\\u9006\\u98de\\u7684\\u6d41\\u661f", "contains": {"4": [{"id": 89410, "name": "\\u590f\\u796d\\u6c34\\u7389", "main": 5000, "append": 401}, {"id": 89420, "name": "\\u590f\\u796d\\u7ec8\\u672b", "main": 2000, "append": 401}, {"id": 89430, "name": "\\u590f\\u796d\\u4e4b\\u9762", "main": 3000, "append": 401}, {"id": 89440, "name": "\\u590f\\u796d\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 89450, "name": "\\u590f\\u796d\\u4e4b\\u523b", "main": 1000, "append": 401}], "5": [{"id": 89510, "name": "\\u590f\\u796d\\u6c34\\u7389", "main": 5000, "append": 501}, {"id": 89520, "name": "\\u590f\\u796d\\u7ec8\\u672b", "main": 2000, "append": 501}, {"id": 89530, "name": "\\u590f\\u796d\\u4e4b\\u9762", "main": 3000, "append": 501}, {"id": 89540, "name": "\\u590f\\u796d\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 89550, "name": "\\u590f\\u796d\\u4e4b\\u523b", "main": 1000, "append": 501}]}}, {"id": 15016, "name": "\\u6c89\\u6ca6\\u4e4b\\u5fc3", "contains": {"4": [{"id": 90410, "name": "\\u6c89\\u6ce2\\u4e4b\\u76cf", "main": 5000, "append": 401}, {"id": 90420, "name": "\\u8ffd\\u5fc6\\u4e4b\\u98ce", "main": 2000, "append": 401}, {"id": 90430, "name": "\\u9152\\u6e0d\\u8239\\u5e3d", "main": 3000, "append": 401}, {"id": 90440, "name": "\\u9970\\u91d1\\u80f8\\u82b1", "main": 4000, "append": 401}, {"id": 90450, "name": "\\u575a\\u94dc\\u7f57\\u76d8", "main": 1000, "append": 401}], "5": [{"id": 90510, "name": "\\u6c89\\u6ce2\\u4e4b\\u76cf", "main": 5000, "append": 501}, {"id": 90520, "name": "\\u8ffd\\u5fc6\\u4e4b\\u98ce", "main": 2000, "append": 501}, {"id": 90530, "name": "\\u9152\\u6e0d\\u8239\\u5e3d", "main": 3000, "append": 501}, {"id": 90540, "name": "\\u9970\\u91d1\\u80f8\\u82b1", "main": 4000, "append": 501}, {"id": 90550, "name": "\\u575a\\u94dc\\u7f57\\u76d8", "main": 1000, "append": 501}]}}, {"id": 15017, "name": "\\u5343\\u5ca9\\u7262\\u56fa", "contains": {"4": [{"id": 91410, "name": "\\u76df\\u8a93\\u91d1\\u7235", "main": 5000, "append": 401}, {"id": 91420, "name": "\\u662d\\u6b66\\u7fce\\u7fbd", "main": 2000, "append": 401}, {"id": 91430, "name": "\\u5c06\\u5e05\\u515c\\u936a", "main": 3000, "append": 401}, {"id": 91440, "name": "\\u52cb\\u7ee9\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 91450, "name": "\\u91d1\\u94dc\\u65f6\\u6677", "main": 1000, "append": 401}], "5": [{"id": 91510, "name": "\\u76df\\u8a93\\u91d1\\u7235", "main": 5000, "append": 501}, {"id": 91520, "name": "\\u662d\\u6b66\\u7fce\\u7fbd", "main": 2000, "append": 501}, {"id": 91530, "name": "\\u5c06\\u5e05\\u515c\\u936a", "main": 3000, "append": 501}, {"id": 91540, "name": "\\u52cb\\u7ee9\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 91550, "name": "\\u91d1\\u94dc\\u65f6\\u6677", "main": 1000, "append": 501}]}}, {"id": 15018, "name": "\\u82cd\\u767d\\u4e4b\\u706b", "contains": {"4": [{"id": 92410, "name": "\\u8d85\\u8d8a\\u4e4b\\u76cf", "main": 5000, "append": 401}, {"id": 92420, "name": "\\u8d24\\u533b\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 92430, "name": "\\u55e4\\u7b11\\u4e4b\\u9762", "main": 3000, "append": 401}, {"id": 92440, "name": "\\u65e0\\u57a2\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 92450, "name": "\\u505c\\u6446\\u4e4b\\u523b", "main": 1000, "append": 401}], "5": [{"id": 92510, "name": "\\u8d85\\u8d8a\\u4e4b\\u76cf", "main": 5000, "append": 501}, {"id": 92520, "name": "\\u8d24\\u533b\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 92530, "name": "\\u55e4\\u7b11\\u4e4b\\u9762", "main": 3000, "append": 501}, {"id": 92540, "name": "\\u65e0\\u57a2\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 92550, "name": "\\u505c\\u6446\\u4e4b\\u523b", "main": 1000, "append": 501}]}}, {"id": 15019, "name": "\\u8ffd\\u5fc6\\u4e4b\\u6ce8\\u8fde", "contains": {"4": [{"id": 93413, "name": "\\u7948\\u671b\\u4e4b\\u5fc3", "main": 5000, "append": 401}, {"id": 93423, "name": "\\u601d\\u5fc6\\u4e4b\\u77e2", "main": 2000, "append": 401}, {"id": 93433, "name": "\\u65e0\\u5e38\\u4e4b\\u9762", "main": 3000, "append": 401}, {"id": 93443, "name": "\\u7f81\\u7f20\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 93453, "name": "\\u671d\\u9732\\u4e4b\\u65f6", "main": 1000, "append": 401}], "5": [{"id": 93513, "name": "\\u7948\\u671b\\u4e4b\\u5fc3", "main": 5000, "append": 501}, {"id": 93523, "name": "\\u601d\\u5fc6\\u4e4b\\u77e2", "main": 2000, "append": 501}, {"id": 93533, "name": "\\u65e0\\u5e38\\u4e4b\\u9762", "main": 3000, "append": 501}, {"id": 93543, "name": "\\u7f81\\u7f20\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 93553, "name": "\\u671d\\u9732\\u4e4b\\u65f6", "main": 1000, "append": 501}]}}, {"id": 15020, "name": "\\u7edd\\u7f18\\u4e4b\\u65d7\\u5370", "contains": {"4": [{"id": 94413, "name": "\\u7eef\\u82b1\\u4e4b\\u58f6", "main": 5000, "append": 401}, {"id": 94423, "name": "\\u5207\\u843d\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 94433, "name": "\\u534e\\u9970\\u4e4b\\u515c", "main": 3000, "append": 401}, {"id": 94443, "name": "\\u660e\\u5a01\\u4e4b\\u9561", "main": 4000, "append": 401}, {"id": 94453, "name": "\\u96f7\\u4e91\\u4e4b\\u7b3c", "main": 1000, "append": 401}], "5": [{"id": 94513, "name": "\\u7eef\\u82b1\\u4e4b\\u58f6", "main": 5000, "append": 501}, {"id": 94523, "name": "\\u5207\\u843d\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 94533, "name": "\\u534e\\u9970\\u4e4b\\u515c", "main": 3000, "append": 501}, {"id": 94543, "name": "\\u660e\\u5a01\\u4e4b\\u9561", "main": 4000, "append": 501}, {"id": 94553, "name": "\\u96f7\\u4e91\\u4e4b\\u7b3c", "main": 1000, "append": 501}]}}, {"id": 15021, "name": "\\u534e\\u9986\\u68a6\\u9192\\u5f62\\u9ab8\\u8bb0", "contains": {"4": [{"id": 95413, "name": "\\u68a6\\u9192\\u4e4b\\u74e2", "main": 5000, "append": 401}, {"id": 95423, "name": "\\u534e\\u9986\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 95433, "name": "\\u5f62\\u9ab8\\u4e4b\\u7b20", "main": 3000, "append": 401}, {"id": 95443, "name": "\\u8363\\u82b1\\u4e4b\\u671f", "main": 4000, "append": 401}, {"id": 95453, "name": "\\u4f17\\u751f\\u4e4b\\u8c23", "main": 1000, "append": 401}], "5": [{"id": 95513, "name": "\\u68a6\\u9192\\u4e4b\\u74e2", "main": 5000, "append": 501}, {"id": 95523, "name": "\\u534e\\u9986\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 95533, "name": "\\u5f62\\u9ab8\\u4e4b\\u7b20", "main": 3000, "append": 501}, {"id": 95543, "name": "\\u8363\\u82b1\\u4e4b\\u671f", "main": 4000, "append": 501}, {"id": 95553, "name": "\\u4f17\\u751f\\u4e4b\\u8c23", "main": 1000, "append": 501}]}}, {"id": 15022, "name": "\\u6d77\\u67d3\\u7817\\u78f2", "contains": {"4": [{"id": 96413, "name": "\\u771f\\u73e0\\u4e4b\\u7b3c", "main": 5000, "append": 401}, {"id": 96423, "name": "\\u6e0a\\u5bab\\u4e4b\\u7fbd", "main": 2000, "append": 401}, {"id": 96433, "name": "\\u6d77\\u7947\\u4e4b\\u51a0", "main": 3000, "append": 401}, {"id": 96443, "name": "\\u6d77\\u67d3\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 96453, "name": "\\u79bb\\u522b\\u4e4b\\u8d1d", "main": 1000, "append": 401}], "5": [{"id": 96513, "name": "\\u771f\\u73e0\\u4e4b\\u7b3c", "main": 5000, "append": 501}, {"id": 96523, "name": "\\u6e0a\\u5bab\\u4e4b\\u7fbd", "main": 2000, "append": 501}, {"id": 96533, "name": "\\u6d77\\u7947\\u4e4b\\u51a0", "main": 3000, "append": 501}, {"id": 96543, "name": "\\u6d77\\u67d3\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 96553, "name": "\\u79bb\\u522b\\u4e4b\\u8d1d", "main": 1000, "append": 501}]}}, {"id": 15023, "name": "\\u8fb0\\u7802\\u5f80\\u751f\\u5f55", "contains": {"4": [{"id": 97413, "name": "\\u7ed3\\u5951\\u4e4b\\u523b", "main": 5000, "append": 401}, {"id": 97423, "name": "\\u6f5c\\u5149\\u7247\\u7fbd", "main": 2000, "append": 401}, {"id": 97433, "name": "\\u867a\\u96f7\\u4e4b\\u59ff", "main": 3000, "append": 401}, {"id": 97443, "name": "\\u751f\\u7075\\u4e4b\\u534e", "main": 4000, "append": 401}, {"id": 97453, "name": "\\u9633\\u8f94\\u4e4b\\u9057", "main": 1000, "append": 401}], "5": [{"id": 97513, "name": "\\u7ed3\\u5951\\u4e4b\\u523b", "main": 5000, "append": 501}, {"id": 97523, "name": "\\u6f5c\\u5149\\u7247\\u7fbd", "main": 2000, "append": 501}, {"id": 97533, "name": "\\u867a\\u96f7\\u4e4b\\u59ff", "main": 3000, "append": 501}, {"id": 97543, "name": "\\u751f\\u7075\\u4e4b\\u534e", "main": 4000, "append": 501}, {"id": 97553, "name": "\\u9633\\u8f94\\u4e4b\\u9057", "main": 1000, "append": 501}]}}, {"id": 15024, "name": "\\u6765\\u6b46\\u4f59\\u54cd", "contains": {"4": [{"id": 98413, "name": "\\u6d8c\\u6cc9\\u4e4b\\u76cf", "main": 5000, "append": 401}, {"id": 98423, "name": "\\u5782\\u7389\\u4e4b\\u53f6", "main": 2000, "append": 401}, {"id": 98433, "name": "\\u6d6e\\u6eaf\\u4e4b\\u73cf", "main": 3000, "append": 401}, {"id": 98443, "name": "\\u9b42\\u9999\\u4e4b\\u82b1", "main": 4000, "append": 401}, {"id": 98453, "name": "\\u795d\\u7940\\u4e4b\\u51ed", "main": 1000, "append": 401}], "5": [{"id": 98513, "name": "\\u6d8c\\u6cc9\\u4e4b\\u76cf", "main": 5000, "append": 501}, {"id": 98523, "name": "\\u5782\\u7389\\u4e4b\\u53f6", "main": 2000, "append": 501}, {"id": 98533, "name": "\\u6d6e\\u6eaf\\u4e4b\\u73cf", "main": 3000, "append": 501}, {"id": 98543, "name": "\\u9b42\\u9999\\u4e4b\\u82b1", "main": 4000, "append": 501}, {"id": 98553, "name": "\\u795d\\u7940\\u4e4b\\u51ed", "main": 1000, "append": 501}]}}, {"id": 15000, "contains": {"6": [{"id": 99340, "name": "\\u9ad8\\u5929\\u7684\\u98ce\\u4e4b\\u4e3b\\u82b1", "main": 4000, "append": 301}, {"id": 99320, "name": "\\u9ad8\\u5929\\u7684\\u98ce\\u4e4b\\u4e3b\\u7fbd", "main": 2000, "append": 301}, {"id": 99350, "name": "\\u9ad8\\u5929\\u7684\\u98ce\\u4e4b\\u4e3b\\u6c99", "main": 1000, "append": 301}, {"id": 99310, "name": "\\u9ad8\\u5929\\u7684\\u98ce\\u4e4b\\u4e3b\\u676f", "main": 5000, "append": 301}, {"id": 99330, "name": "\\u9ad8\\u5929\\u7684\\u98ce\\u4e4b\\u4e3b\\u51a0", "main": 3000, "append": 301}]}}]`);
var reli_main_prop = {
    "1000": {
        "HP": {"normal": 10001, "percent": 10002},
        "攻击": {"normal": 10003, "percent": 10004},
        "防御": {"normal": 10005, "percent": 10006},
        "充能效率": {"normal": 10007},
        "元素精通": {"normal": 10008},
        "火元素抗性": {"normal": 10009},
        "雷元素抗性": {"normal": 10010},
        "冰元素抗性": {"normal": 10011},
        "水元素抗性": {"normal": 10012},
        "风元素抗性": {"normal": 10013},
        "岩元素抗性": {"normal": 10014},
        "草元素抗性": {"normal": 10015}
    },
    "2000": {"攻击": {"normal": 12001}},
    "3000": {
        "HP": {"normal": 13001, "percent": 13002},
        "攻击": {"normal": 13003, "percent": 13004},
        "防御": {"normal": 13005, "percent": 13006},
        "暴击率": {"normal": 13007},
        "暴击伤害": {"normal": 13008},
        "治疗加成": {"normal": 13009},
        "元素精通": {"normal": 13010}
    },
    "4000": {"HP": {"normal": 14001}},
    "5000": {
        "HP": {"normal": 15001, "percent": 15002},
        "攻击": {"normal": 15003, "percent": 15004},
        "防御": {"normal": 15005, "percent": 15006},
        "元素精通": {"normal": 15007},
        "火伤加成": {"normal": 15008},
        "雷伤加成": {"normal": 15009},
        "冰伤加成": {"normal": 15010},
        "水伤加成": {"normal": 15011},
        "风伤加成": {"normal": 15012},
        "岩伤加成": {"normal": 15013},
        "草伤加成": {"normal": 15014},
        "物伤加成": {"normal": 15015}
    },
    "1099": {"攻击": {"percent": 10990}},
    "1098": {"HP": {"percent": 10980}},
    "1097": {"防御": {"percent": 10970}},
    "1096": {"充能效率": {"normal": 10960}},
    "1095": {"元素精通": {"normal": 10950}},
    "3099": {"攻击": {"percent": 30990}},
    "3098": {"HP": {"percent": 30980}},
    "3097": {"防御": {"percent": 30970}},
    "3096": {"暴击率": {"normal": 30960}},
    "3095": {"暴击伤害": {"normal": 30950}},
    "3094": {"治疗加成": {"normal": 30940}},
    "3093": {"元素精通": {"normal": 30930}},
    "5099": {"攻击": {"percent": 50990}},
    "5098": {"HP": {"percent": 50980}},
    "5097": {"防御": {"percent": 50970}},
    "5096": {"火伤加成": {"normal": 50960}},
    "5095": {"雷伤加成": {"normal": 50950}},
    "5094": {"冰伤加成": {"normal": 50940}},
    "5093": {"水伤加成": {"normal": 50930}},
    "5092": {"风伤加成": {"normal": 50920}},
    "5091": {"岩伤加成": {"normal": 50910}},
    "5090": {"草伤加成": {"normal": 50900}},
    "5089": {"物伤加成": {"normal": 50890}},
    "5088": {"元素精通": {"normal": 50880}}
}
var reli_affix_prop = {
    "101": {
        "HP": {
            "normal": {"101021": 23.899999618530273, "101022": 29.8799991607666},
            "percent": {"101031": 0.011699999682605267, "101032": 0.014600000344216824}
        },
        "攻击": {
            "normal": {"101051": 1.559999942779541, "101052": 1.9500000476837158},
            "percent": {"101061": 0.011699999682605267, "101062": 0.014600000344216824}
        },
        "防御": {
            "normal": {"101081": 1.850000023841858, "101082": 2.309999942779541},
            "percent": {"101091": 0.014600000344216824, "101092": 0.018200000748038292}
        },
        "充能效率": {"normal": {"101231": 0.013000000268220901, "101232": 0.016200000420212746}},
        "元素精通": {"normal": {"101241": 4.659999847412109, "101242": 5.829999923706055}},
        "暴击率": {"normal": {"101201": 0.007799999788403511, "101202": 0.009700000286102295}},
        "暴击伤害": {"normal": {"101221": 0.01549999974668026, "101222": 0.01940000057220459}}
    },
    "201": {
        "HP": {
            "normal": {"201021": 50.189998626708984, "201022": 60.95000076293945, "201023": 71.69999694824219},
            "percent": {"201031": 0.016300000250339508, "201032": 0.01979999989271164, "201033": 0.02329999953508377}
        },
        "攻击": {
            "normal": {"201051": 3.2699999809265137, "201052": 3.9700000286102295, "201053": 4.670000076293945},
            "percent": {"201061": 0.016300000250339508, "201062": 0.01979999989271164, "201063": 0.02329999953508377}
        },
        "防御": {
            "normal": {"201081": 3.890000104904175, "201082": 4.71999979019165, "201083": 5.559999942779541},
            "percent": {"201091": 0.020400000736117363, "201092": 0.024800000712275505, "201093": 0.029100000858306885}
        },
        "充能效率": {
            "normal": {
                "201231": 0.01810000091791153,
                "201232": 0.02199999988079071,
                "201233": 0.02590000070631504
            }
        },
        "元素精通": {"normal": {"201241": 6.53000020980835, "201242": 7.929999828338623, "201243": 9.329999923706055}},
        "暴击率": {
            "normal": {
                "201201": 0.010900000110268593,
                "201202": 0.013199999928474426,
                "201203": 0.01549999974668026
            }
        },
        "暴击伤害": {
            "normal": {
                "201221": 0.021800000220537186,
                "201222": 0.026399999856948853,
                "201223": 0.031099999323487282
            }
        }
    },
    "301": {
        "HP": {
            "normal": {
                "301021": 100.37999725341797,
                "301022": 114.72000122070312,
                "301023": 129.05999755859375,
                "301024": 143.39999389648438
            },
            "percent": {
                "301031": 0.02449999935925007,
                "301032": 0.02800000086426735,
                "301033": 0.03150000050663948,
                "301034": 0.03500000014901161
            }
        },
        "攻击": {
            "normal": {
                "301051": 6.539999961853027,
                "301052": 7.46999979019165,
                "301053": 8.399999618530273,
                "301054": 9.34000015258789
            },
            "percent": {
                "301061": 0.02449999935925007,
                "301062": 0.02800000086426735,
                "301063": 0.03150000050663948,
                "301064": 0.03500000014901161
            }
        },
        "防御": {
            "normal": {
                "301081": 7.78000020980835,
                "301082": 8.890000343322754,
                "301083": 10.0,
                "301084": 11.109999656677246
            },
            "percent": {
                "301091": 0.03060000017285347,
                "301092": 0.03500000014901161,
                "301093": 0.03929999843239784,
                "301094": 0.043699998408555984
            }
        },
        "充能效率": {
            "normal": {
                "301231": 0.0272000003606081,
                "301232": 0.031099999323487282,
                "301233": 0.03500000014901161,
                "301234": 0.03889999911189079
            }
        },
        "元素精通": {
            "normal": {
                "301241": 9.789999961853027,
                "301242": 11.1899995803833,
                "301243": 12.59000015258789,
                "301244": 13.989999771118164
            }
        },
        "暴击率": {
            "normal": {
                "301201": 0.016300000250339508,
                "301202": 0.01860000006854534,
                "301203": 0.020999999716877937,
                "301204": 0.02329999953508377
            }
        },
        "暴击伤害": {
            "normal": {
                "301221": 0.032600000500679016,
                "301222": 0.037300001829862595,
                "301223": 0.041999999433755875,
                "301224": 0.04659999907016754
            }
        }
    },
    "401": {
        "HP": {
            "normal": {
                "401021": 167.3000030517578,
                "401022": 191.1999969482422,
                "401023": 215.10000610351562,
                "401024": 239.0
            },
            "percent": {
                "401031": 0.032600000500679016,
                "401032": 0.037300001829862595,
                "401033": 0.041999999433755875,
                "401034": 0.04659999907016754
            }
        },
        "攻击": {
            "normal": {
                "401051": 10.890000343322754,
                "401052": 12.449999809265137,
                "401053": 14.0,
                "401054": 15.5600004196167
            },
            "percent": {
                "401061": 0.032600000500679016,
                "401062": 0.037300001829862595,
                "401063": 0.041999999433755875,
                "401064": 0.04659999907016754
            }
        },
        "防御": {
            "normal": {
                "401081": 12.960000038146973,
                "401082": 14.819999694824219,
                "401083": 16.670000076293945,
                "401084": 18.520000457763672
            },
            "percent": {
                "401091": 0.040800001472234726,
                "401092": 0.04659999907016754,
                "401093": 0.05249999836087227,
                "401094": 0.05829999968409538
            }
        },
        "充能效率": {
            "normal": {
                "401231": 0.03629999980330467,
                "401232": 0.0414000004529953,
                "401233": 0.04659999907016754,
                "401234": 0.05180000141263008
            }
        },
        "元素精通": {
            "normal": {
                "401241": 13.0600004196167,
                "401242": 14.920000076293945,
                "401243": 16.790000915527344,
                "401244": 18.649999618530273
            }
        },
        "暴击率": {
            "normal": {
                "401201": 0.021800000220537186,
                "401202": 0.024900000542402267,
                "401203": 0.02800000086426735,
                "401204": 0.031099999323487282
            }
        },
        "暴击伤害": {
            "normal": {
                "401221": 0.04349999874830246,
                "401222": 0.04969999939203262,
                "401223": 0.0560000017285347,
                "401224": 0.062199998646974564
            }
        }
    },
    "501": {
        "HP": {
            "normal": {"501021": 209.1300048828125, "501022": 239.0, "501023": 268.8800048828125, "501024": 298.75},
            "percent": {
                "501031": 0.040800001472234726,
                "501032": 0.04659999907016754,
                "501033": 0.05249999836087227,
                "501034": 0.05829999968409538
            }
        },
        "攻击": {
            "normal": {
                "501051": 13.619999885559082,
                "501052": 15.5600004196167,
                "501053": 17.510000228881836,
                "501054": 19.450000762939453
            },
            "percent": {
                "501061": 0.040800001472234726,
                "501062": 0.04659999907016754,
                "501063": 0.05249999836087227,
                "501064": 0.05829999968409538
            }
        },
        "防御": {
            "normal": {
                "501081": 16.200000762939453,
                "501082": 18.520000457763672,
                "501083": 20.829999923706055,
                "501084": 23.149999618530273
            },
            "percent": {
                "501091": 0.050999999046325684,
                "501092": 0.05829999968409538,
                "501093": 0.06560000032186508,
                "501094": 0.07289999723434448
            }
        },
        "充能效率": {
            "normal": {
                "501231": 0.04529999941587448,
                "501232": 0.05180000141263008,
                "501233": 0.05829999968409538,
                "501234": 0.06480000168085098
            }
        },
        "元素精通": {
            "normal": {
                "501241": 16.31999969482422,
                "501242": 18.649999618530273,
                "501243": 20.979999542236328,
                "501244": 23.309999465942383
            }
        },
        "暴击率": {
            "normal": {
                "501201": 0.0272000003606081,
                "501202": 0.031099999323487282,
                "501203": 0.03500000014901161,
                "501204": 0.03889999911189079
            }
        },
        "暴击伤害": {
            "normal": {
                "501221": 0.0544000007212162,
                "501222": 0.062199998646974564,
                "501223": 0.06989999860525131,
                "501224": 0.07769999653100967
            }
        }
    },
    "999": {
        "暴击伤害": {"normal": {"999001": 3.5}},
        "暴击率": {"normal": {"999002": 1.0}},
        "攻击": {"normal": {"999003": 233333.0}},
        "防御": {"normal": {"999004": 233333.0}}
    },
    "998": {
        "HP": {"percent": {"998001": 0.14569999277591705}},
        "攻击": {"percent": {"998002": 0.14569999277591705}},
        "防御": {"percent": {"998003": 0.18209999799728394}},
        "暴击率": {"normal": {"998004": 0.09709999710321426}},
        "充能效率": {"normal": {"998005": 0.16189999878406525}},
        "元素精通": {"normal": {"998006": 58.279998779296875}},
        "暴击伤害": {"normal": {"998007": 0.19429999589920044}}
    },
    "995": {
        "HP": {"percent": {"995001": 0.14569999277591705}},
        "攻击": {"percent": {"995002": 0.14569999277591705}},
        "防御": {"percent": {"995003": 0.18209999799728394}},
        "暴击率": {"normal": {"995004": 0.09709999710321426}},
        "充能效率": {"normal": {"995005": 0.16189999878406525}},
        "元素精通": {"normal": {"995006": 58.279998779296875}},
        "暴击伤害": {"normal": {"995007": 0.19429999589920044}}
    },
    "997": {
        "HP": {"percent": {"997001": 0.09319999814033508}},
        "攻击": {"percent": {"997002": 0.09319999814033508}},
        "防御": {"percent": {"997003": 0.11659999936819077}},
        "暴击率": {"normal": {"997004": 0.062199998646974564}},
        "充能效率": {"normal": {"997005": 0.10360000282526016}},
        "元素精通": {"normal": {"997006": 37.29999923706055}},
        "暴击伤害": {"normal": {"997007": 0.12430000305175781}}
    },
    "996": {
        "HP": {"percent": {"996001": 0.09319999814033508}},
        "攻击": {"percent": {"996002": 0.09319999814033508}},
        "防御": {"percent": {"996003": 0.11659999936819077}},
        "暴击率": {"normal": {"996004": 0.062199998646974564}},
        "充能效率": {"normal": {"996005": 0.10360000282526016}},
        "元素精通": {"normal": {"996006": 37.29999923706055}},
        "暴击伤害": {"normal": {"996007": 0.12430000305175781}}
    },
    "994": {"暴击率": {"normal": {"994001": 0.800000011920929}}},
    "993": {"暴击伤害": {"normal": {"993001": 0.800000011920929}}},
    "992": {"SHIELD_COST_MINUS_RATIO": {"normal": {"992001": 0.800000011920929}}},
    "991": {"治疗加成": {"normal": {"991001": 0.800000011920929}}},
    "990": {"HEALED_ADD": {"normal": {"990001": 0.800000011920929}}},
    "989": {"SKILL_CD_MINUS_RATIO": {"normal": {"989001": 0.5}}},
    "988": {"SPEED": {"percent": {"988001": 0.30000001192092896}}},
    "987": {"火伤加成": {"normal": {"987001": 0.800000011920929}}},
    "986": {"雷伤加成": {"normal": {"986001": 0.800000011920929}}},
    "985": {"水伤加成": {"normal": {"985001": 0.800000011920929}}},
    "984": {"草伤加成": {"normal": {"984001": 0.800000011920929}}},
    "983": {"风伤加成": {"normal": {"983001": 0.800000011920929}}},
    "982": {"岩伤加成": {"normal": {"982001": 0.800000011920929}}},
    "981": {"冰伤加成": {"normal": {"981001": 0.800000011920929}}},
    "980": {"物伤加成": {"normal": {"980001": 0.800000011920929}}},
    "979": {"FIRE_SUB_HURT": {"normal": {"979001": 0.800000011920929}}},
    "978": {"ELEC_SUB_HURT": {"normal": {"978001": 0.800000011920929}}},
    "977": {"WATER_SUB_HURT": {"normal": {"977001": 0.800000011920929}}},
    "976": {"GRASS_SUB_HURT": {"normal": {"976001": 0.800000011920929}}},
    "975": {"WIND_SUB_HURT": {"normal": {"975001": 0.800000011920929}}},
    "974": {"ROCK_SUB_HURT": {"normal": {"974001": 0.800000011920929}}},
    "973": {"ICE_SUB_HURT": {"normal": {"973001": 0.800000011920929}}},
    "972": {"PHYSICAL_SUB_HURT": {"normal": {"972001": 0.800000011920929}}},
    "971": {"ADD_HURT": {"normal": {"971001": 0.800000011920929}}},
    "970": {"SUB_HURT": {"normal": {"970001": 0.800000011920929}}},
    "969": {"防御": {"normal": {"969001": -500.0}}},
    "968": {"元素精通": {"normal": {"968001": -300.0}}},
    "951": {
        "HP": {"percent": {"951001": 0.14569999277591705}},
        "攻击": {"percent": {"951002": 0.14569999277591705}},
        "防御": {"percent": {"951003": 0.18209999799728394}},
        "暴击率": {"normal": {"951004": 0.09709999710321426}},
        "充能效率": {"normal": {"951005": 0.16189999878406525}},
        "元素精通": {"normal": {"951006": 58.279998779296875}},
        "暴击伤害": {"normal": {"951007": 0.19429999589920044}}
    },
    "952": {
        "HP": {"percent": {"952001": 0.14569999277591705}},
        "攻击": {"percent": {"952002": 0.14569999277591705}},
        "防御": {"percent": {"952003": 0.18209999799728394}},
        "暴击率": {"normal": {"952004": 0.09709999710321426}},
        "充能效率": {"normal": {"952005": 0.16189999878406525}},
        "元素精通": {"normal": {"952006": 58.279998779296875}},
        "暴击伤害": {"normal": {"952007": 0.19429999589920044}}
    },
    "953": {
        "HP": {"percent": {"953001": 0.14569999277591705}},
        "攻击": {"percent": {"953002": 0.14569999277591705}},
        "防御": {"percent": {"953003": 0.18209999799728394}},
        "暴击率": {"normal": {"953004": 0.09709999710321426}},
        "充能效率": {"normal": {"953005": 0.16189999878406525}},
        "元素精通": {"normal": {"953006": 58.279998779296875}},
        "暴击伤害": {"normal": {"953007": 0.19429999589920044}}
    },
    "956": {
        "HP": {"percent": {"956001": 0.14569999277591705}},
        "攻击": {"percent": {"956002": 0.14569999277591705}},
        "防御": {"percent": {"956003": 0.18209999799728394}},
        "暴击率": {"normal": {"956004": 0.09709999710321426}},
        "充能效率": {"normal": {"956005": 0.16189999878406525}},
        "元素精通": {"normal": {"956006": 58.279998779296875}},
        "暴击伤害": {"normal": {"956007": 0.19429999589920044}}
    },
    "941": {
        "HP": {"percent": {"941001": 0.09319999814033508}},
        "攻击": {"percent": {"941002": 0.09319999814033508}},
        "防御": {"percent": {"941003": 0.11659999936819077}},
        "暴击率": {"normal": {"941004": 0.062199998646974564}},
        "充能效率": {"normal": {"941005": 0.10360000282526016}},
        "元素精通": {"normal": {"941006": 37.29999923706055}},
        "暴击伤害": {"normal": {"941007": 0.12430000305175781}}
    },
    "942": {
        "HP": {"percent": {"942001": 0.09319999814033508}},
        "攻击": {"percent": {"942002": 0.09319999814033508}},
        "防御": {"percent": {"942003": 0.11659999936819077}},
        "暴击率": {"normal": {"942004": 0.062199998646974564}},
        "充能效率": {"normal": {"942005": 0.10360000282526016}},
        "元素精通": {"normal": {"942006": 37.29999923706055}},
        "暴击伤害": {"normal": {"942007": 0.12430000305175781}}
    },
    "943": {
        "HP": {"percent": {"943001": 0.09319999814033508}},
        "攻击": {"percent": {"943002": 0.09319999814033508}},
        "防御": {"percent": {"943003": 0.11659999936819077}},
        "暴击率": {"normal": {"943004": 0.062199998646974564}},
        "充能效率": {"normal": {"943005": 0.10360000282526016}},
        "元素精通": {"normal": {"943006": 37.29999923706055}},
        "暴击伤害": {"normal": {"943007": 0.12430000305175781}}
    },
    "946": {
        "HP": {"percent": {"946001": 0.09319999814033508}},
        "攻击": {"percent": {"946002": 0.09319999814033508}},
        "防御": {"percent": {"946003": 0.11659999936819077}},
        "暴击率": {"normal": {"946004": 0.062199998646974564}},
        "充能效率": {"normal": {"946005": 0.10360000282526016}},
        "元素精通": {"normal": {"946006": 37.29999923706055}},
        "暴击伤害": {"normal": {"946007": 0.12430000305175781}}
    },
    "961": {
        "HP": {"percent": {"961001": 0.09713800251483917}, "normal": {"961008": 746.8800048828125}},
        "攻击": {"percent": {"961002": 0.14569999277591705}, "normal": {"961009": 48.630001068115234}},
        "防御": {"percent": {"961003": 0.12140599638223648}, "normal": {"961010": 57.869998931884766}},
        "暴击率": {"normal": {"961004": 0.09709999710321426}},
        "充能效率": {"normal": {"961005": 0.16189999878406525}},
        "元素精通": {"normal": {"961006": 38.85527420043945}},
        "暴击伤害": {"normal": {"961007": 0.19429999589920044}}
    },
    "962": {
        "HP": {"percent": {"962001": 0.09713800251483917}, "normal": {"962008": 746.8800048828125}},
        "攻击": {"percent": {"962002": 0.14569999277591705}, "normal": {"962009": 48.630001068115234}},
        "防御": {"percent": {"962003": 0.12140599638223648}, "normal": {"962010": 57.869998931884766}},
        "暴击率": {"normal": {"962004": 0.09709999710321426}},
        "充能效率": {"normal": {"962005": 0.16189999878406525}},
        "元素精通": {"normal": {"962006": 38.85527420043945}},
        "暴击伤害": {"normal": {"962007": 0.19429999589920044}}
    },
    "963": {
        "HP": {"percent": {"963001": 0.09713800251483917}, "normal": {"963008": 746.8800048828125}},
        "攻击": {"percent": {"963002": 0.14569999277591705}, "normal": {"963009": 48.630001068115234}},
        "防御": {"percent": {"963003": 0.12140599638223648}, "normal": {"963010": 57.869998931884766}},
        "暴击率": {"normal": {"963004": 0.09709999710321426}},
        "充能效率": {"normal": {"963005": 0.16189999878406525}},
        "元素精通": {"normal": {"963006": 38.85527420043945}},
        "暴击伤害": {"normal": {"963007": 0.19429999589920044}}
    },
    "964": {
        "HP": {"percent": {"964001": 0.09713800251483917}, "normal": {"964008": 746.8800048828125}},
        "攻击": {"percent": {"964002": 0.14569999277591705}, "normal": {"964009": 48.630001068115234}},
        "防御": {"percent": {"964003": 0.12140599638223648}, "normal": {"964010": 57.869998931884766}},
        "暴击率": {"normal": {"964004": 0.09709999710321426}},
        "充能效率": {"normal": {"964005": 0.16189999878406525}},
        "元素精通": {"normal": {"964006": 38.85527420043945}},
        "暴击伤害": {"normal": {"964007": 0.19429999589920044}}
    },
    "965": {
        "HP": {"percent": {"965001": 0.09713800251483917}, "normal": {"965008": 746.8800048828125}},
        "攻击": {"percent": {"965002": 0.14569999277591705}, "normal": {"965009": 48.630001068115234}},
        "防御": {"percent": {"965003": 0.12140599638223648}, "normal": {"965010": 57.869998931884766}},
        "暴击率": {"normal": {"965004": 0.09709999710321426}},
        "充能效率": {"normal": {"965005": 0.16189999878406525}},
        "元素精通": {"normal": {"965006": 38.85527420043945}},
        "暴击伤害": {"normal": {"965007": 0.19429999589920044}}
    }
};
var monster_data = JSON.parse(`[{"id": "20010101", "name": "\u8349\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010201", "name": "\u5927\u578b\u8349\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010202", "name": "\u5927\u578b\u8349\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010301", "name": "\u98ce\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010401", "name": "\u5927\u578b\u98ce\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010403", "name": "\u5927\u578b\u98ce\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010501", "name": "\u96f7\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010601", "name": "\u5927\u578b\u96f7\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010604", "name": "\u5927\u578b\u96f7\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010701", "name": "\u53d8\u5f02\u96f7\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010702", "name": "\u53d8\u5f02\u96f7\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010801", "name": "\u51b0\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010802", "name": "\u51b0\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010901", "name": "\u5927\u578b\u51b0\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010902", "name": "\u5927\u578b\u51b0\u53f2\u83b1\u59c6", "type": 0}, {"id": "20010904", "name": "\u5927\u578b\u51b0\u53f2\u83b1\u59c6", "type": 0}, {"id": "20011001", "name": "\u6c34\u53f2\u83b1\u59c6", "type": 0}, {"id": "20011101", "name": "\u5927\u578b\u6c34\u53f2\u83b1\u59c6", "type": 0}, {"id": "20011103", "name": "\u5927\u578b\u6c34\u53f2\u83b1\u59c6", "type": 0}, {"id": "20011601", "name": "\u65e0\u76f8\u4e4b\u6c34\u00b7\u53ec\u5524\u7269", "type": 0}, {"id": "20011701", "name": "\u65e0\u76f8\u4e4b\u6c34\u00b7\u53ec\u5524\u7269", "type": 0}, {"id": "20011801", "name": "\u65e0\u76f8\u4e4b\u6c34\u00b7\u53ec\u5524\u7269", "type": 0}, {"id": "20011901", "name": "\u65e0\u76f8\u4e4b\u6c34\u00b7\u53ec\u5524\u7269", "type": 0}, {"id": "20020101", "name": "\u72c2\u98ce\u4e4b\u6838", "type": 0}, {"id": "20040101", "name": "\u65e0\u76f8\u4e4b\u96f7", "type": 1}, {"id": "20040102", "name": "\u65e0\u76f8\u4e4b\u96f7", "type": 1}, {"id": "20040201", "name": "\u65e0\u76f8\u4e4b\u98ce", "type": 1}, {"id": "20040202", "name": "\u65e0\u76f8\u4e4b\u98ce", "type": 1}, {"id": "20040301", "name": "\u65e0\u76f8\u4e4b\u5ca9", "type": 1}, {"id": "20040302", "name": "\u65e0\u76f8\u4e4b\u5ca9", "type": 1}, {"id": "20040401", "name": "\u65e0\u76f8\u4e4b\u6c34", "type": 1}, {"id": "20040501", "name": "\u65e0\u76f8\u4e4b\u51b0", "type": 1}, {"id": "20040601", "name": "\u65e0\u76f8\u4e4b\u706b", "type": 1}, {"id": "20050101", "name": "\u7eaf\u6c34\u7cbe\u7075", "type": 1}, {"id": "20050102", "name": "\u7eaf\u6c34\u7cbe\u7075", "type": 1}, {"id": "20050201", "name": "\u5e7b\u5f62\u8c55\u517d\u00b7\u6c34", "type": 0}, {"id": "20050202", "name": "\u5e7b\u5f62\u8c55\u517d\u00b7\u6c34", "type": 0}, {"id": "20050203", "name": "\u5e7b\u5f62\u8c55\u517d\u00b7\u6c34", "type": 0}, {"id": "21010101", "name": "\u4e18\u4e18\u4eba", "type": 0}, {"id": "21020101", "name": "\u6728\u76fe\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020201", "name": "\u706b\u65a7\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020202", "name": "\u706b\u65a7\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020301", "name": "\u5ca9\u76fe\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020401", "name": "\u4e18\u4e18\u971c\u94e0\u738b", "type": 0}, {"id": "21020501", "name": "\u4e18\u4e18\u5ca9\u76d4\u738b", "type": 0}, {"id": "21020601", "name": "\u51b0\u76fe\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020701", "name": "\u96f7\u65a7\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020703", "name": "\u96f7\u65a7\u4e18\u4e18\u66b4\u5f92", "type": 0}, {"id": "21020801", "name": "\u4e18\u4e18\u96f7\u515c\u738b", "type": 0}, {"id": "29010101", "name": "\u88c2\u7a7a\u7684\u9b54\u9f99", "type": 1}, {"id": "29010102", "name": "\u88c2\u7a7a\u7684\u9b54\u9f99", "type": 1}, {"id": "29010103", "name": "\u88c2\u7a7a\u7684\u9b54\u9f99", "type": 1}, {"id": "29010104", "name": "\u88c2\u7a7a\u7684\u9b54\u9f99", "type": 1}, {"id": "29020101", "name": "\u5317\u98ce\u7684\u738b\u72fc\uff0c\u5954\u72fc\u7684\u9886\u4e3b", "type": 1}, {"id": "29020102", "name": "\u5317\u98ce\u7684\u738b\u72fc\uff0c\u5954\u72fc\u7684\u9886\u4e3b", "type": 1}, {"id": "29030103", "name": "\u300c\u516c\u5b50\u300d", "type": 1}, {"id": "29030106", "name": "\u300c\u516c\u5b50\u300d", "type": 1}, {"id": "29040101", "name": "\u82e5\u9640\u9f99\u738b", "type": 1}, {"id": "29040102", "name": "\u82e5\u9640\u9f99\u738b", "type": 1}, {"id": "29040103", "name": "\u82e5\u9640\u9f99\u738b", "type": 1}, {"id": "29040104", "name": "\u82e5\u9640\u9f99\u738b", "type": 1}, {"id": "29040111", "name": "\u82e5\u9640\u9f99\u738b", "type": 1}, {"id": "29050102", "name": "\u300c\u5973\u58eb\u300d", "type": 1}, {"id": "29050104", "name": "\u300c\u5973\u58eb\u300d", "type": 1}, {"id": "29060202", "name": "\u7978\u6d25\u5fa1\u5efa\u9e23\u795e\u547d", "type": 1}, {"id": "29060203", "name": "\u7978\u6d25\u5fa1\u5efa\u9e23\u795e\u547d", "type": 1}]`);