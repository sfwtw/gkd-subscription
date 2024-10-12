import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统 UI',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      rules: [
        {
          matches: '[text="允许 USB 调试吗？"] <<2 LinearLayout +3 [id="android:id/buttonPanel"] >2 Button[text="允许"]',
          snapshotUrls: 'https://i.gkd.li/i/15796616',
        },
      ],
    },
  ],
});
