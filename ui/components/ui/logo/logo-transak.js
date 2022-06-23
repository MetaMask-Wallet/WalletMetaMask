import React from 'react';
import PropTypes from 'prop-types';

const LogoTransak = ({ width = '100%', className, ariaLabel }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 1813 480"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
    >
      <path
        d="M431.4 479.4H40.3C18.3 479.4 0.5 461.6 0.5 439.6V40.5C0.5 18.5 18.3 0.699997 40.3 0.699997H431.5C453.5 0.699997 471.3 18.5 471.3 40.5V439.6C471.3 461.5 453.5 479.4 431.4 479.4Z"
        fill="url(#paint0_linear_9_13)"
      />
      <path
        d="M471.3 290.6V439.5C471.3 461.5 453.5 479.3 431.5 479.3H282.6L471.3 290.6Z"
        fill="#2970E2"
      />
      <path
        d="M158.4 288.7L297.3 144.3C307.9 133.7 324.5 134.5 335.6 145.5L415.9 222.9C424.4 231.1 424.2 247.3 416.3 256C406 266.3 394.4 267 378.8 256.4L320.6 193.4L174.3 332.5C164.5 340.1 154.5 346.5 139.1 336.6C133.8 329.5 144.3 315.6 140.2 311.5L158.4 288.7Z"
        fill="#D1D9E6"
      />
      <path
        d="M152.1 337.2C140.2 336.8 130.9 329.1 130.9 319.9L131.6 154.8C131.6 145.7 140.1 134.6 152 134.2C167.8 134.2 174.7 147 174.7 156.5V320.3C174.8 329.8 164.5 337.5 152.1 337.2Z"
        fill="#D1D9E6"
      />
      <path
        d="M314.1 341.7C299.4 341.7 293.2 330.8 293.2 322.2V170.8C293.2 162.3 302.3 151.9 314.1 151.5C326.4 151.1 336.6 161.5 336.6 170.4V320.1C336.6 330.7 329.3 341.7 314.1 341.7Z"
        fill="#D1D9E6"
      />
      <path
        d="M147.1 339C138 338.6 130.9 330.9 130.9 321.7V156.6C130.9 147.5 138 136.4 147.1 136C156.6 135.6 164.6 146.6 164.6 156.2V322.2C164.6 331.7 156.7 339.4 147.1 339Z"
        fill="white"
      />
      <path
        d="M309.5 340.7C300.2 340.7 292.6 329.9 292.6 320.5V157.9C292.6 148.6 300.2 141 309.5 141C318.8 141 326.4 148.6 326.4 157.9V320.6C326.3 329.8 318.8 340.7 309.5 340.7Z"
        fill="white"
      />
      <path
        d="M147.8 337.4C142.3 337.4 136.8 335.3 132.7 331.1L56.2 254.4C47.9 246 47.9 232.5 56.3 224.1C64.7 215.8 78.2 215.8 86.6 224.2L148.2 286.2L295.6 145.9C303.9 138 316.9 138 325.2 146L405.4 223.4C413.9 231.6 414.1 245.1 406 253.7C397.9 262.2 384.3 262.4 375.7 254.3L310.2 191.2L162.5 331.5C158.4 335.4 153.1 337.4 147.8 337.4Z"
        fill="white"
      />
      <path
        d="M294.7 217.8L285.4 226.6C285.4 226.6 288 211.9 280.5 219C272.9 226.2 292.1 200.8 292.1 200.8L296 205.7L294.7 217.8Z"
        fill="white"
      />
      <path
        d="M326.3 215.6C326.3 215.6 326.8 206.6 336.6 222V209.9L326 204.4L326.3 215.6Z"
        fill="white"
      />
      <path
        d="M164.7 258.2C164.7 258.2 166.1 268.2 174.9 255.3V267.4L164.3 272.9L164.7 258.2Z"
        fill="white"
      />
      <path
        d="M674.3 176.3L676.4 177C676.7 182.7 676.9 193.4 676.9 209.1C676.9 210.1 675.4 210.5 672.4 210.5H651.7C649.8 210.5 648.8 212 648.8 215V337.8C648.8 338 648.4 338.3 647.6 338.9C646.8 339.5 646.3 339.7 645.9 339.7H608.5L606.8 338.3C606.3 337.8 606.1 300.5 606.1 226.4V211.6C586.9 211.6 577.3 210.4 577.3 208V177.5C577.3 177.3 577.9 176.9 579.2 176.1H622C624.2 176.4 625.6 176.7 626 176.8C626.5 176.8 626.7 176.6 626.7 176.1H674.3V176.3ZM733.1 175.9H799C814.1 175.9 827.4 181.4 838.9 192.4C850.4 203.4 856.2 216.6 856.2 231.8C856.2 243.7 852.8 254 846.1 262.7C839.4 271.4 830.3 278.2 818.8 282.9C818.3 282.9 818.1 283.3 818.1 284.1V284.3C818.3 284.5 818.3 284.6 818.3 284.8L859 334.5C859.5 335.3 860 336.2 860.4 337.1C860.8 338 861.2 338.7 861.5 339.1C861.7 339.5 861.9 339.8 861.9 339.9C861.9 340.4 859.3 340.8 854 341.2C848.8 341.6 845.3 341.8 843.5 341.8C842.2 341.8 841.4 341.6 840.9 341.1H815.4C813.8 340.9 812.5 340.1 811.4 338.5L778.3 299.5C778.1 299.3 777.8 298.9 777.3 298.3C776.8 297.7 776.3 297.2 775.9 296.9C775.4 296.6 774.9 296.4 774.5 296.4C774.2 296.4 773.8 297.4 773.3 299.5V338.1C773.3 339.4 772.8 340 771.9 340H739.5C736.6 340 734.7 339.4 733.8 338.1C732.8 336.8 732.2 334.7 731.9 331.7C731.9 317.6 732 299.7 732.3 278C732.5 256.3 732.7 240 732.7 229.1C732.7 227.4 732.6 221 732.5 210.1L732 193.7C732.4 182.1 732.8 176.2 733.1 175.9ZM813.3 231.3C813.3 226.9 812.3 223 810.2 219.6C806.2 213.4 798 210.3 785.4 210.3C783.2 210.3 779.8 210.5 775.4 210.8L773.3 213.2C773.3 215.3 773.2 218.5 773.1 222.8C772.9 227.2 772.8 230.9 772.7 233.9C772.6 236.9 772.6 239.1 772.6 240.3C772.6 250.9 773.6 256.9 775.5 258.2H778.1C791.3 257.9 800.4 256.1 805.6 252.7C810.8 249.4 813.3 242.3 813.3 231.3ZM967.8 174H996.1C996.9 174 999.2 178.4 1002.9 187.1C1006.6 195.8 1008.5 200.7 1008.5 201.6C1011.8 210.3 1029.8 254.7 1062.5 334.6C1062.5 336.8 1061.5 338.2 1059.6 338.8C1057.7 339.4 1054.2 339.6 1049.1 339.6L1037 339.4C1028.9 339.2 1022.8 339.2 1018.7 339.2C1018.4 338.2 1017.7 336.6 1016.8 334.2C1015.8 331.8 1015.1 330 1014.5 328.7C1013.9 327.4 1013.1 325.8 1012 323.9C1010.9 322 1009.7 320.3 1008.4 318.7C1007.3 318.7 1005.1 318.5 1001.7 318.1C998.4 317.7 995.4 317.5 992.7 317.5L962.9 318C962.4 318 961 317.9 958.6 317.8C956.2 317.6 954.9 317.6 954.8 317.6C951.9 317.6 949.5 321.3 947.4 328.8C945.3 336.3 943.6 340.5 942.2 341.4C937.9 341.6 932.6 341.4 926.4 341C920.1 340.6 914.9 340.4 910.6 340.4C903.9 340.4 900.6 339.4 900.6 337.5C900.6 337.2 900.6 336.8 900.7 336.3C900.8 335.8 900.8 335.5 900.8 335.3L914.6 295.3C916.7 291.2 919.2 285 922.1 276.7C925 268.5 926.9 263.4 927.7 261.5C930.9 253.3 936.3 239.5 944 220.3C951.7 201.1 957.5 186.3 961.5 175.8C961.8 174.6 963.8 174 967.8 174ZM970.2 285.1H976.4C987.8 284.8 993.5 284.1 993.5 283.2C993.5 280.3 991 273.1 986.1 261.5C984.2 256.9 983.1 254.4 982.8 253.9L979.7 246.5C978.9 246.5 976.2 252 971.7 262.9C967.2 273.8 964.9 280.3 964.9 282.2C964.9 284.1 966.7 285.1 970.2 285.1ZM1253.2 265.3C1253.2 265.6 1253.1 266.3 1253 267.4C1252.8 268.5 1252.7 269.6 1252.5 270.7L1252.3 272.1C1252.3 278.9 1252.5 289.2 1252.8 302.8C1253.1 316.4 1253.3 326.6 1253.3 333.3C1253.3 337.9 1252.3 340.2 1250.4 340.2H1219.5C1217 340.2 1215.1 339.3 1214 337.6L1184.7 293.8C1184.5 293.2 1183.8 292.1 1182.6 290.7C1181.3 289.3 1180.7 288.5 1180.7 288.3L1156.7 253.6L1153.8 250.5L1153.3 251.5C1153.3 310.4 1152.6 339.8 1151.2 339.8H1113.6L1112.2 339.1C1112.2 326.9 1112.4 305.9 1112.7 276.1C1113 246.3 1113.2 224.3 1113.2 209.8C1113.2 198.9 1113 190.6 1112.7 185L1113.7 178.1L1118.5 177.1L1148.5 178.1C1149.3 178.1 1150.2 178.9 1151.4 180.5C1152.5 182.1 1153.2 183.4 1153.5 184.3L1175.9 216.7C1176.2 217.3 1176.8 218.2 1177.7 219.4C1178.6 220.6 1179.2 221.5 1179.5 222.1L1210.2 264.2C1210.7 265.3 1211.3 265.9 1212.1 265.9C1212.6 265.9 1212.8 265.7 1212.8 265.2V179.3L1214.2 178.1C1214.4 177.9 1217.8 177.9 1224.4 177.9C1243.1 177.9 1252.5 178.2 1252.5 178.9L1253.5 180.3V265.3H1253.2ZM1378.3 287.5C1375.9 285.1 1372.9 282.7 1369.1 280.2C1365.4 277.7 1361.1 275.1 1356.2 272.3C1351.4 269.5 1348.4 267.7 1347.3 266.9C1326.8 253.9 1316.6 238.2 1316.6 219.8C1316.6 204.4 1322 192.9 1332.8 185.3C1343.6 177.7 1357.6 173.9 1374.7 173.9C1384.1 173.9 1393.5 175.8 1403 179.6C1404.7 180.2 1407.6 181.5 1411.4 183.4C1415.3 185.3 1417.2 186.7 1417.2 187.4L1417 188.6C1417 188.8 1416.8 189 1416.5 189.4C1416.2 189.8 1416 190.2 1416 190.5C1411.1 200.7 1406.3 208.9 1401.7 215.3C1401.5 215.8 1401.1 216 1400.5 216C1399.9 216 1396.2 214.7 1389.6 212.1C1382.9 209.5 1377.8 208.2 1374.1 208.2C1370.6 208.2 1367.4 209.2 1364.3 211.1C1361.3 213 1359.8 215.6 1359.8 219C1359.8 223.3 1362.2 227.3 1366.9 231.1C1370.1 233.5 1376.4 237.7 1385.9 243.7C1388 245.1 1390.7 247 1394 249.3C1397.3 251.6 1399.9 253.4 1401.9 254.8C1403.8 256.1 1405.9 257.8 1408.3 259.8C1410.7 261.8 1412.7 263.7 1414.2 265.6C1418 270.5 1420.6 275 1421.9 278.9C1423.2 282.9 1423.9 287.7 1423.9 293.4C1423.9 308.3 1418.3 320.6 1407 330.2C1395.7 339.8 1382.3 344.6 1366.8 344.6C1349.8 344.6 1333.9 340.5 1319 332.2C1312.3 328.1 1309 325.6 1309 324.8V323.8C1316 311.1 1321.8 301.3 1326.4 294.3C1328.6 294.3 1331.2 295.4 1334.1 297.6C1337 299.8 1338.7 301 1339.2 301.2C1347.6 305.5 1357.2 307.6 1368 307.6C1377.4 307.6 1382 304.1 1382 297.1C1382.4 294.2 1381 291 1378.3 287.5ZM1536.1 174H1564.4C1565.2 174 1567.5 178.4 1571.2 187.1C1574.9 195.8 1576.8 200.7 1576.8 201.6C1580.1 210.3 1598.1 254.7 1630.8 334.6C1630.8 336.8 1629.8 338.2 1627.9 338.8C1626 339.4 1622.5 339.6 1617.4 339.6L1605.3 339.4C1597.2 339.2 1591.1 339.2 1587 339.2C1586.7 338.2 1586 336.6 1585.1 334.2C1584.1 331.8 1583.4 330 1582.8 328.7C1582.2 327.4 1581.4 325.8 1580.3 323.9C1579.2 322 1578 320.3 1576.7 318.7C1575.6 318.7 1573.4 318.5 1570 318.1C1566.7 317.7 1563.7 317.5 1561 317.5L1531.2 318C1530.7 318 1529.3 317.9 1526.9 317.8C1524.5 317.6 1523.2 317.6 1523.1 317.6C1520.2 317.6 1517.8 321.3 1515.7 328.8C1513.6 336.3 1511.9 340.5 1510.5 341.4C1506.2 341.6 1500.9 341.4 1494.7 341C1488.4 340.6 1483.2 340.4 1478.9 340.4C1472.2 340.4 1468.9 339.4 1468.9 337.5C1468.9 337.2 1468.9 336.8 1469 336.3C1469.1 335.8 1469.1 335.5 1469.1 335.3L1482.9 295.3C1485 291.2 1487.5 285 1490.4 276.7C1493.3 268.5 1495.2 263.4 1496 261.5C1499.2 253.3 1504.6 239.5 1512.3 220.3C1520 201.1 1525.8 186.3 1529.8 175.8C1530.1 174.6 1532.2 174 1536.1 174ZM1538.5 285.1H1544.7C1556.1 284.8 1561.8 284.1 1561.8 283.2C1561.8 280.3 1559.3 273.1 1554.4 261.5C1552.5 256.9 1551.4 254.4 1551.1 253.9L1548 246.5C1547.2 246.5 1544.5 252 1540 262.9C1535.5 273.8 1533.2 280.3 1533.2 282.2C1533.3 284.1 1535 285.1 1538.5 285.1ZM1716.1 173C1721 173 1723.5 173.9 1723.5 175.6V224.2C1723.5 225.8 1723.7 226.6 1724 226.6C1725.1 226.6 1726.5 225.6 1728.2 223.5C1729.9 221.4 1731.6 219.1 1733.3 216.5C1735 213.9 1736.4 212.2 1737.3 211.4L1764 175.2C1764.8 174.2 1765.9 173.8 1767.3 173.8H1802.5L1808.2 174.8C1808.5 174.8 1808.7 175.1 1808.7 175.8C1808.7 176.9 1808.5 177.6 1808.2 177.9L1798 194.1L1796.6 195.1L1766.1 235.8C1765.6 236.3 1765.4 236.9 1765.4 237.7C1765.4 238.8 1765.6 239.8 1766.1 240.6L1812.3 336C1812.3 336.2 1812.3 336.4 1812.3 336.7L1812.5 337.4C1812.5 340.1 1807.7 341.4 1798.2 341.4C1792.6 341.4 1786.2 341.2 1778.8 340.7C1771.4 340.2 1767.3 340 1766.5 340L1764.8 338.8C1763.8 337.8 1755 319.5 1738.1 283.8C1737.9 282.5 1736.8 280 1734.8 276.2C1734.3 276.2 1732.5 278.4 1729.2 282.9C1725.9 287.3 1724.2 290 1723.8 290.8C1723.8 293.7 1723.8 298.3 1723.9 304.6C1724 310.9 1724 316.9 1724 322.4C1724 333.7 1722.7 339.5 1720.2 340C1717 340 1713.1 340.1 1708.3 340.4C1703.5 340.6 1700.3 340.8 1698.5 340.8C1695.8 340.8 1692.2 340.5 1687.6 339.8C1683 339.2 1680.7 338.6 1680.7 338.1V256.2C1681.7 248.6 1682.1 244.2 1682.1 243.1C1682.1 236 1681.8 225.3 1681.1 211C1680.5 196.7 1680.1 186.1 1680.1 179.1C1680.1 176.2 1680.7 174.5 1682 173.9C1690.4 173.2 1701.6 173 1716.1 173Z"
        fill="url(#paint1_linear_9_13)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_13"
          x1="-15.068"
          y1="44.9459"
          x2="489.022"
          y2="436.843"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1304" stopColor="#3495F7" />
          <stop offset="0.3063" stopColor="#2B87F2" />
          <stop offset="0.6392" stopColor="#1461E5" />
          <stop offset="0.7232" stopColor="#0E57E1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9_13"
          x1="577.482"
          y1="258.803"
          x2="1812.46"
          y2="258.803"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3495F7" />
          <stop offset="0.4939" stopColor="#1461E5" />
          <stop offset="1" stopColor="#0E57E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

LogoTransak.propTypes = {
  /**
   * The width of the logo. Defaults to 100%
   */
  width: PropTypes.string,
  /**
   * Additional className to add to the root svg
   */
  className: PropTypes.string,
  /**
   * Aria label to add to the logo component
   */
  ariaLabel: PropTypes.string,
};

export default LogoTransak;
