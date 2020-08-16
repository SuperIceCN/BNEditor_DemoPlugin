registerNewCategory(BN,"测试bn编辑器插件",187);
addBlockToCategory(BN,"测试bn编辑器插件","json_emptyJSON");
registerNewBlock("testBlock_1",{
  "message0": "把字符串 %1 用红色打印",
  "args0": [
	{
	  "type": "input_value",
	  "name": "SSSS",
	  "check": "String"
	}
  ],
  "nextStatement": null,
  "previousStatement": null,
  "inputsInline": true,
  "colour": 187,
  "tooltip": "我的测试块啦啦啦",
  "helpUrl": "#"
},function(block){
	return 'logger.info("§c"+'+getVariableFromBlock(block,"SSSS")+');\n'
})
registerNewBlock("blue",{
	"message0": "把字符串 %1 变为蓝色",
	"args0":[
		{
			"type": "input_value",
			"name": "BBBB",
			"check": "String"
		}
	],
	"output": "String",
	"colour": 133,
	"tooltip": "变蓝色",
	"helpUrl": "#"
},function(block){
	return '"§b"+'+getVariableFromBlock(block,"BBBB");
})
addBlockToCategory(BN,"测试bn编辑器插件","testBlock_1");
addBlockToCategory(BN,"测试bn编辑器插件","blue");
