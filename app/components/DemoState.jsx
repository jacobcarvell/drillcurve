export var initialState = {
  userName: 'Jacob',
  company: 'rabbithole',
  showCompleted: true,
  options: {
      surveyMethod: {
         tangent: false,
         avgAngle: false,
         minCurve: true
      },
      projectionMethod: {
         lastValue: false,
         movAvg: false,
         expSmooth: true
      },
      dipConvention: {
         posUp: true,
         posDown: false,
         inclination: false
      }
  },
  drillholes: [
    {
      id: 'DDH001',
      active: true,
      created: undefined,
      completed: false,
      completedAt: undefined,
      mFromTarget: 10,
      collar: {x: 493698.25, y: 6950425.3, z: 14},
      target: {x: 0, y: 0, z: 0, radius: 20},
      planSurvey: [{depth: 0, dip: -17, azi: 225},{depth: 12, dip: -16.8, azi: 225.1},{depth: 30, dip: -16.6, azi: 225.2},{depth: 60, dip: -16.4, azi: 225.3},{depth: 90, dip: -16.2, azi: 225.4},{depth: 120, dip: -16, azi: 225.5},{depth: 150, dip: -15.6, azi: 226},{depth: 180, dip: -15.2, azi: 226.5},{depth: 210, dip: -14.8, azi: 227},{depth: 240, dip: -14.4, azi: 227.5},{depth: 270, dip: -14, azi: 228},{depth: 300, dip: -13.6, azi: 228.5}],
      actualSurvey: [{depth: 0, dip: -17.4, azi: 224.1, temp:30, mag:50000},{depth: 12, dip: -17.3, azi: 224.6, temp:30, mag:50000},{depth: 30, dip: -17.2, azi: 225.1, temp:30, mag:50000},{depth: 60, dip: -17.1, azi: 225.6, temp:30, mag:50000},{depth: 90, dip: -17, azi: 226.1, temp:30, mag:50000},{depth: 120, dip: -16.9, azi: 226.6, temp:30, mag:50000},{depth: 150, dip: -16.8, azi: 227.1, temp:30, mag:50000},{depth: 180, dip: -16.7, azi: 227.6, temp:30, mag:50000},{depth: 210, dip: -16.5, azi: 228.1, temp:30, mag:50000},{depth: 240, dip: -16.3, azi: 228.6, temp:30, mag:50000},{depth: 270, dip: -16.1, azi: 229.1, temp:30, mag:50000},{depth: 300, dip: -15.9, azi: 229.6, temp:30, mag:50000}],
      projectedPoints: {
         x: [493468.43893160444],
         y: [6950211.620259895],
         z: [-80.32059635300271]
      },
      planPoints: {
         x: [493698.25,493689.37159825413,493676.0167457874,493653.6968333308,493631.3153559542,493608.8725757682,493586.28086720017,493563.4535182155,493540.3926462948,493517.1004232322,493493.5790746103,493469.830879262],
         y: [6950425.3,6950416.437088684,6950403.151991774,6950381.026032302,6950358.916359095,6950336.823388648,6950314.81571029,6950292.96346114,6950271.270136415,6950249.739198258,6950228.37407489,6950207.178159768],
         z: [14,10.18853383322367,4.5370548117680505,-4.77242840699589,-13.97214970898261,-23.06199699849129,-31.98678523890881,-40.69117029907085,-49.17472793952963,-57.43704468365428,-65.47771783778308,-73.29635551085018]
      },
      actualPoints: {
         x: [493698.25,493689.50179863226,493676.2556574771,493653.97389562195,493631.48883163824,493608.80204242445,493585.91512384685,493562.8296906079,493539.54131146305,493516.0455869639,493492.344217971,493468.43893160444],
         y: [6950425.3,6950416.351043183,6950403.035394671,6950381.02425815,6950359.196685357,6950337.554615089,6950316.099972015,6950294.834666491,6950273.755152867,6950252.858072052,6950232.1456913315,6950211.620259895],
         z: [14,10.09011963799954,4.258071431630864,-5.40735874221315,-15.018109303376853,-24.574150975847303,-34.075454650264305,-43.52199138400911,-52.886313107278085,-62.1409294632366,-71.28572768730496,-80.32059635300271]
      },
      targetBox: {
         x: [493462.3413220541,493462.3413220541,493477.3204364699,493477.3204364699,493462.3413220541],
         y: [6950213.80436025,6950213.80436025,6950200.5519592855,6950200.5519592855,6950213.80436025],
         z: [-83.29635551085018,-63.29635551085018,-63.29635551085018,-83.29635551085018,-83.29635551085018]
      }
    },
    {
      id: 'DDH002',
      active: false,
      created: undefined,
      completed: false,
      completedAt: undefined,
      mFromTarget: 15,
      collar: {x: 0, y: 0, z: 0},
      target: {x: 0, y: 0, z: 0, radius: 20},
      planSurvey: [{depth: 0, dip: -30, azi: 90},  {depth: 12, dip: -29.8, azi: 90.5},  {depth: 30, dip: -29.6, azi: 91},  {depth: 60, dip: -29.4, azi: 91.5},  {depth: 90, dip: -29.2, azi: 92},  {depth: 120, dip: -29, azi: 92.5},  {depth: 150, dip: -28.8, azi: 93},  {depth: 180, dip: -28.6, azi: 93.5},  {depth: 210, dip: -28.4, azi: 94},  {depth: 240, dip: -28.2, azi: 94.5},  {depth: 270, dip: -28, azi: 95},  {depth: 300, dip: -27.8, azi: 95.5}],
      actualSurvey: [{depth: 0, dip: -30, azi: 90, temp:30, mag:50000},{depth: 12, dip: -29.7, azi: 90.3, temp:30, mag:50000},{depth: 30, dip: -29.4, azi: 90.6, temp:30, mag:50000},{depth: 60, dip: -29.1, azi: 90.9, temp:30, mag:50000},{depth: 90, dip: -28.8, azi: 91.2, temp:30, mag:50000},{depth: 120, dip: -28.5, azi: 91.5, temp:30, mag:50000},{depth: 150, dip: -28.2, azi: 91.8, temp:30, mag:50000},{depth: 180, dip: -27.9, azi: 92.1, temp:30, mag:50000},{depth: 210, dip: -27.6, azi: 92.4, temp:30, mag:50000}],
      projectedPoints: {
         x: [201.24132969406313,230.300093052753,259.43029970827433,288.63031166652354],
         y: [-4.6963214739522385,-5.990566015730188,-7.440856251751779,-9.047931764713558],
         z: [-110.06341234918693,-125.17324748222482,-140.13057350083486,-154.9349803423686]
      },
      planPoints: {
         x: [0,11.365874535439715,28.447501502041757,56.96904385077828,85.54020929407083,114.15844407912117,142.82118201111564,171.52584478950328,200.26984234623058,229.05057318588368,257.86542472768855,286.7117736493195],
         y: [0,-0.0496430712531764,-0.2733280291071329,-0.8957932445768506,-1.7688435156736841,-2.893378514948588,-4.27026932173285,-5.9003582636374645,-7.784458762099582,-9.923355181999895,-12.317802685374211,-14.96852708924181],
         z: [0,-6.535792286625356,-16.27990839592426,-32.42061682872433,-48.46164350938773,-64.4027929830666,-80.24387101188533,-95.98468457730728,-111.62504188248663,-127.16475235460543,-142.6036266471956,-157.9414766424461]
      },
      actualPoints: {
         x: [0,11.371690663604973,28.479776840386094,57.07593374123459,85.75319115209984,114.5099607498671,143.34464549201434,172.25563979174586,201.24132969406313],
         y: [0,-0.029815812289685564,-0.16425165014282167,-0.5387056316189864,-1.0644114250815204,-1.7422100043302118,-2.572925664476963,-3.5573659315525403,-4.6963214739522385],
         z: [0,-6.525858589214504,-16.225199036167197,-32.24124419911002,-48.10732802543926,-63.823015538452104,-79.38787588463667,-94.80148234548403,-110.06341234918693]
      },
      targetBox: {
        x: [287.67023117452175,287.67023117452175,285.7533161241173,285.7533161241173,287.67023117452175],
        y: [-5.014565105570021,-5.014565105570021,-24.9224890729136,-24.9224890729136,-5.014565105570021],
        z: [-167.9414766424461,-147.9414766424461,-147.9414766424461,-167.9414766424461,-167.9414766424461]
      }
    },
    {
      id: 'DDH003',
      active: false,
      created: undefined,
      completed: true,
      completedAt: 500,
      mFromTarget: 8,
      collar: {x: 0, y: 0, z: 0},
      target: {x: 0, y: 0, z: 0, radius: 20},
      planSurvey: [{depth: 0, dip: 20, azi: 150}, {depth: 200, dip: 20, azi: 150}],
      actualSurvey: [{depth: 0, dip: 20, azi: 150, temp:30, mag:50000},{depth: 12, dip: 19.9, azi: 150.2, temp:30, mag:50000},{depth: 30, dip: 19.8, azi: 150.4, temp:30, mag:50000},{depth: 60, dip: 19.7, azi: 150.6, temp:30, mag:50000},{depth: 90, dip: 19.6, azi: 150.8, temp:30, mag:50000}],
      projectedPoints: {
         x: [45.606805135202464,57.624500488306694,69.57413730008864,81.45544042497133,93.26813604061398,100.11869514915796],
         y: [-80.52282390798408,-102.11438843720765,-123.76114569720372,-145.46281740768165,-167.21912387392288,-179.9420089436695],
         z: [33.25032463972306,42.02514574619307,50.756825067082914,59.4453360041831,68.0906520907825,73.10854078301296]
      },
      planPoints: {
         x: [0,102.67128368463571],
         y: [0,-177.83187982010662],
         z: [0,74.73858235021716]
      },
      actualPoints: {
         x: [0,6.143575928521093,15.308731165175297,30.499958343956422,45.606805135202464],
         y: [0,-10.684019662195828,-26.752267836630487,-53.60270523391219,-80.52282390798408],
         z: [0,4.4735598197861,11.151623989926659,22.227904436693926,33.25032463972306]
      },
      targetBox: {
        x: [111.33153772248009,111.33153772248009,94.01102964679133,94.01102964679133,111.33153772248009],
        y: [-172.83187982010662,-172.83187982010662,-182.83187982010662,-182.83187982010662,-172.83187982010662],
        z: [64.73858235021716,84.73858235021716,84.73858235021716,64.73858235021716,64.73858235021716]
      }
    }
  ],
};
