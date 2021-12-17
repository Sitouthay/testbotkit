/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears(
        ['hi', 'hello', 'good morning', 'xin chào'],
        'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Chào bạn. hihi');
    });

    controller.hears(
        ['bạn có khỏe không', 'khỏe không', 'bạn là ai', 'bạn tên gì'],
        'message,direct_message', async(bot, message) => {
        await bot.reply(message, 'tôi là bot xây dựng bởi botkit mà');
    });

    controller.on('message, direct_message', async(bot, message) => {
        await bot.reply(message, 'Tôi không hiểu bạn đang nói gì');
    });

}
