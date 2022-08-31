const {
    SurfaceLimit, StyleLimit, DistanceLimit,
    SURFACE, STYLE, DISTANCE
} = require('./constants')

function normalSkillData(thiz) {
    return {
        passive: [
            {
                normal: {id: 200022, name: '반시계(좌) 방향○', value: 40},
                rare: {id: 200021, name: '반시계(좌) 방향◎', value: 60},
                status: ['speed'],
                courseLimit: {
                    'turn': [2]
                },
            },
            {
                normal: {id: 200012, name: '시계(우) 방향○', value: 40},
                rare: {id: 200011, name: '시계(우) 방향◎', value: 60},
                status: ['speed'],
                courseLimit: {
                    'turn': [1]
                },
            },
            {
                normal: {name: '계절 우마무스메○', value: 40},
                rare: {name: '계절 우마무스메◎', value: 60},
                status: ['speed'],
                emulatorTypeLimit: ['cm'],
                check: function () {
                    return thiz.emulatorType === 'cm'
                }
            },
            {
                normal: {id: 200272, name: '단독○', value: 60},
                rare: {id: 200271, name: '단독', value: 80},
                status: ['speed'],
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 200302, name: '복병○', value: 40},
                rare: {id: 200301, name: '복병◎', value: 60},
                status: ['speed'],
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 200262, name: '바깥쪽 그룹 능숙○', value: 40},
                rare: {id: 200261, name: '바깥쪽 그룹 능숙◎', value: 60},
                status: ['speed'],
                tooltip: '발동률44%로 취급.(챔피언스 미팅 기준)',
                triggerRate: 4.0 / 9,
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 201631, name: '심퍼시', value: 40},
                status: ['speed'],
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 201641, name: '고독한 늑대', value: 40},
                status: ['speed'],
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 200082, name: '삿포로 경기장○', value: 40},
                rare: {id: 200081, name: '삿포로 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10001]
                },
            },
            {
                normal: {id: 200092, name: '하코다테 경기장○', value: 40},
                rare: {id: 200091, name: '하코다테 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10002]
                },
            },
            {
                normal: {id: 200112, name: '니이가타 경기장○', value: 40},
                rare: {id: 200111, name: '니이가타 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10003]
                },
            },
            {
                normal: {id: 200102, name: '후쿠시마 경기장○', value: 40},
                rare: {id: 200101, name: '후쿠시마 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10004]
                },
            },
            {
                normal: {id: 200042, name: '나카야마 경기장○', value: 40},
                rare: {id: 200041, name: '나카야마 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10005]
                },
            },
            {
                normal: {id: 200032, name: '도쿄 경기장○', value: 40},
                rare: {id: 200031, name: '도쿄 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10006]
                },
            },
            {
                normal: {id: 200072, name: '츄코 경기장○', value: 40},
                rare: {id: 200071, name: '츄코 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10007]
                },
            },
            {
                normal: {id: 200062, name: '교토 경기장○', value: 40},
                rare: {id: 200061, name: '교토 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10008]
                },
            },
            {
                normal: {id: 200052, name: '한신 경기장○', value: 40},
                rare: {id: 200051, name: '한신 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10009]
                },
            },
            {
                normal: {id: 200122, name: '코쿠라 경기장○', value: 40},
                rare: {id: 200121, name: '코쿠라 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10010]
                },
            },
            {
                normal: {id: 200952, name: '오이 경기장○', value: 40},
                rare: {id: 200951, name: '오이 경기장◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10101]
                },
            },
            {
                normal: {id: 200132, name: '근간거리○', value: 40},
                rare: {id: 200131, name: '근간거리◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'distance': [1200, 1600, 2000, 2400, 2800, 3200, 3600]
                },
            },
            {
                normal: {id: 200142, name: '비근간거리○', value: 40},
                rare: {id: 200141, name: '비근간거리◎', value: 60},
                status: ['stamina'],
                courseLimit: {
                    'distance': [1000, 1100, 1300, 1400, 1500, 1700, 1800, 1900, 2100, 2200
                        , 2300, 2500, 2600, 2700, 2900, 3000, 3100, 3300, 3400, 3500]
                },
            },
            {
                normal: {id: 200152, name: '양호한 경기장○', value: 40},
                rare: {id: 200151, name: '양호한 경기장◎', value: 60},
                surfaceConditionLimit: ['0'],
                status: ['power'],
                check: function () {
                    return thiz.track.surfaceCondition === '0'
                }
            },
            {
                normal: {id: 200162, name: '진창길○', value: 40},
                rare: {id: 200161, name: '진창길◎', value: 60},
                surfaceConditionLimit: ['1', '2', '3'],
                status: ['power'],
                check: function () {
                    return thiz.track.surfaceCondition !== '0'
                }
            },
            {
                normal: {id: 200282, name: '대항의식○', value: 40},
                rare: {id: 200281, name: '대항의식◎', value: 60},
                status: ['power'],
                check: function () {
                    return true
                }
            },
            {
                normal: {name: '날씨○', value: 40},
                rare: {name: '날씨◎', value: 60},
                status: ['guts'],
                emulatorTypeLimit: ['cm'],
                check: function () {
                    return thiz.emulatorType === 'cm'
                }
            },
            {
                normal: {id: 200292, name: '집중마크○', value: 40},
                rare: {id: 200291, name: '집중마크◎', value: 60},
                status: ['guts'],
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 200252, name: '안쪽 그룹 능숙○', value: 40},
                rare: {id: 200251, name: '안쪽 그룹 능숙◎', value: 60},
                status: ['wisdom'],
                tooltip: '発動率33%として扱う(チャンピオンズミーティング基準)',
                triggerRate: 3.0 / 9,
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 201522, name: '도주의 요령○', value: 40},
                rare: {id: 201521, name: '도주의 요령◎', value: 60},
                status: ['wisdom'],
                styleLimit: [1],
                check: function () {
                    return thiz.isRunningStyle(STYLE.NIGE)
                }
            },
            {
                normal: {id: 201532, name: '선행의 요령○', value: 40},
                rare: {id: 201531, name: '선행의 요령◎', value: 60},
                status: ['wisdom'],
                styleLimit: [2],
                check: function () {
                    return thiz.isRunningStyle(2)
                }
            },
            {
                normal: {id: 201542, name: '선입의 요령○', value: 40},
                rare: {id: 201541, name: '선입의 요령◎', value: 60},
                status: ['wisdom'],
                styleLimit: [3],
                check: function () {
                    return thiz.isRunningStyle(3)
                }
            },
            {
                normal: {id: 201552, name: '추입의 요령○', value: 40},
                rare: {id: 201551, name: '추입의 요령◎', value: 60},
                status: ['wisdom'],
                styleLimit: [4],
                check: function () {
                    return thiz.isRunningStyle(4)
                }
            },
            {
                normal: {id: 201562, name: '럭키 세븐', value: 40},
                rare: {id: 201561, name: '슈퍼 럭키 세븐', value: 60},
                status: ['speed', 'stamina', 'power'],
                tooltip: '발동확률은 1/18로 취급 (챔피언스 미팅 기준)',
                triggerRate: 1.0 / 18,
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 200172, name: '봄 우마무스메○', value: 40},
                rare: {id: 200171, name: '봄 우마무스메◎', value: 60},
                status: ['speed'],
                tooltip: '발동률은 40%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.season === 0
                }
            },
            {
                normal: {id: 200182, name: '여름 우마무스메○', value: 40},
                rare: {id: 200181, name: '여름 우마무스메◎', value: 60},
                status: ['speed'],
                tooltip: '발동률은 20%로 취급.',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.season === 1
                }
            },
            {
                normal: {id: 200192, name: '가을 우마무스메○', value: 40},
                rare: {id: 200191, name: '가을 우마무스메◎', value: 60},
                status: ['speed'],
                tooltip: '발동률은 20%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.season === 2
                }
            },
            {
                normal: {id: 200202, name: '겨울 우마무스메○', value: 40},
                rare: {id: 200201, name: '겨울 우마무스메◎', value: 60},
                status: ['speed'],
                tooltip: '발동률은 20%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.season === 3
                }
            },
            {
                normal: {id: 200212, name: '맑은 날○', value: 40},
                rare: {id: 200211, name: '맑은 날◎', value: 60},
                status: ['guts'],
                tooltip: '발동률은 57.5%로 취급.',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.weather === 0
                }
            },
            {
                normal: {id: 200222, name: '흐린 날○', value: 40},
                rare: {id: 200221, name: '흐린 날◎', value: 60},
                status: ['guts'],
                tooltip: '발동률은 30%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.weather === 1
                }
            },
            {
                normal: {id: 200232, name: '비 오는 날○', value: 40},
                rare: {id: 200231, name: '비 오는 날◎', value: 60},
                status: ['guts'],
                tooltip: '발동률은 11%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.weather === 2
                }
            },
            {
                normal: {id: 200242, name: '눈 오는 날○', value: 40},
                rare: {id: 200241, name: '눈 오는 날◎', value: 60},
                status: ['guts'],
                tooltip: '발동률은 1.5%로 취급',
                emulatorTypeLimit: ['team'],
                check: function () {
                    return thiz.weather === 3
                }
            },
            {
                rare: {id: 200194, name: '초가을 강풍', value: 60},
                status: ['speed', 'power'],
            },
            {
                rare: {id: 200174, name: '첫 봄바람', value: 60},
                status: ['speed', 'power'],
            },
            {
                rare: {id: 200154, name: '양호한 경기장 요괴', value: 60},
                surfaceConditionLimit: ['0'],
                status: ['speed', 'power'],
                check: function () {
                    return thiz.track.surfaceCondition === '0'
                }
            },
            {
                rare: {id: 200014, name: '시계(우) 방향 요괴', value: 60},
                courseLimit: {
                    'turn': [1]
                },
                status: ['speed', 'power'],
                check: function () {
                    return thiz.track.surfaceCondition === '0'
                }
            },
            {
                normal: {id: 202161, name: '자제심', passiveBonus: {wisdom: 60, temptationRate: -3}},
                tooltip: '곱률은 -3%로 일괄 처리',
                check: () => true,
            },
            {
                rare: {id: 202251, name: '교류 대상◎', value: 60},
                normal: {id: 202252, name: '교류 대상○', value: 40},
                status: ['speed'],
                courseLimit: {
                    'surface': [SURFACE.DIRT],
                },
            },
            {
                rare: {id: 202331, name: '뛰어난 파고들기', value: 80},
                normal: {id: 202332, name: '능숙한 파고들기', value: 60},
                surfaceLimit: SurfaceLimit.Dirt,
                status: ['speed'],
                check: function () {
                    return thiz.isSurfaceType(SURFACE.DIRT);
                },
                trigger: function (skill) {
                    if (skill.id === 202331) {
                        if (thiz.umaStatus.power >= 1200) {
                            thiz.passiveBonus.speed += 80;
                        } else if (thiz.umaStatus.power >= 1000) {
                            thiz.passiveBonus.speed += 60;
                        }
                    } else {
                        if (thiz.umaStatus.power >= 1200) {
                            thiz.passiveBonus.speed += 40;
                        } else if (thiz.umaStatus.power >= 1000) {
                            thiz.passiveBonus.speed += 20;
                        }
                    }
                }
            },
            {
                rare: {id: 202201, name: '카와사키 경기장◎', value: 60},
                normal: {id: 202202, name: '카와사키 경기장○', value: 40},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10103]
                },
            },
            {
                rare: {id: 202211, name: '후나바시 경기장◎', value: 60},
                normal: {id: 202212, name: '후나바시 경기장○', value: 40},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10104]
                },
            },
            {
                rare: {id: 202221, name: '모리오카 경기장◎', value: 60},
                normal: {id: 202222, name: '모리오카 경기장○', value: 40},
                status: ['stamina'],
                courseLimit: {
                    'raceTrackId': [10105]
                },
            },
            {
                rare: {id: 202231, name: '야간 경기◎', value: 60},
                normal: {id: 202232, name: '야간 경기○', value: 40},
                status: ['wisdom'],
            },
            {
                rare: {id: 202241, name: '작은 회전◎', value: 60},
                normal: {id: 202242, name: '작은 회전○', value: 40},
                status: ['wisdom'],
                courseLimit: {
                    'raceTrackId': [10001, 10002, 10004, 10010, 10103, 10104]
                },
            },
            {
                rare: {id: 202342, name: '흙장난◎', value: 60},
                normal: {id: 202343, name: '흙장난○', value: 40},
                surfaceLimit: SurfaceLimit.Dirt,
                surfaceConditionLimit: ['2', '3'],
                status: ['speed'],
                check: function () {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.track.surfaceCondition === '2' || thiz.track.surfaceCondition === '3';
                }
            },
            {
                rare: {id: 202341, name: '흙투성이 마이스터', value: 60},
                surfaceLimit: SurfaceLimit.Dirt,
                surfaceConditionLimit: ['2', '3'],
                status: ['speed', 'power'],
                check: function () {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.track.surfaceCondition === '2' || thiz.track.surfaceCondition === '3';
                }
            },
        ],
        // End of passive skills
        heal: [
            {
                normal: {id: 200352, name: '코너 회복○', value: 150},
                rare: {id: 200351, name: '원호의 마에스트로', value: 550},
                init: function () {
                    this.randoms = thiz.initCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200382, name: '직선회복', value: 150},
                rare: {id: 200381, name: '호전일식', value: 550},
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200742, name: '심호흡', value: 150},
                rare: {id: 200741, name: '쿨다운', value: 550},
                distanceLimit: DistanceLimit.Long,
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(DISTANCE.LONG) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201571, name: '스리 세븐', value: 150},
                check: function (startPosition) {
                    return thiz.isContainsRemainingDistance(777, startPosition)
                }
            },
            {
                normal: {id: 201621, name: '쥐어짜기', value: 150},
                check: function () {
                    return thiz.skillTriggerCount[2] + thiz.skillTriggerCount[3] >= 3
                }
            },
            {
                normal: {id: 201482, name: '하굣길의 즐거움', value: 150},
                rare: {id: 201481, name: '하교 후의 스페셜리스트', value: 550},
                styleLimit: [4],
                check: function () {
                    return thiz.accTimePassed(10) && thiz.isRunningStyle(4)
                        && thiz.isInSlope('down')
                }
            },
            {
                normal: {id: 201282, name: '기세에 맡기기', value: 150},
                rare: {id: 201281, name: '말괄량이 우마무스메', value: 550},
                styleLimit: [1],
                check: function () {
                    return thiz.accTimePassed(10) && thiz.isRunningStyle(1)
                        && thiz.isInSlope('up')
                }
            },
            {
                normal: {id: 201352, name: '영양보급', value: 150},
                rare: {id: 201351, name: '먹보', value: 550},
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200572, name: '좋은 위치 뒤따르기', value: 150},
                rare: {id: 200571, name: '레이스 플래너', value: 550},
                styleLimit: [2],
                tooltip: '순위 비율 50% 이하로 적용',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200662, name: '상황 파악', heal: 150, acceleration: 0.1},
                styleLimit: [3, 4],
                distanceLimit: [1],
                tooltip: '순위 비율 50% 초과로 계산',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201222, name: '스태미나 이터', value: 150},
                rare: {id: 201221, name: '스태미나 그리드', value: 350},
                styleLimit: [2, 3, 4],
                distanceLimit: [4],
                tooltip: '순위 5 이상이라고 임의 적용',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200712, name: '전도유망', value: 150},
                rare: {id: 200711, name: '개척자', value: 550},
                styleLimit: [1, 2],
                distanceLimit: [3],
                tooltip: '랜덤 위치에서 선두이기때문에 발동이 어렵지만 발동된다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200622, name: '후방 대기', value: 150},
                rare: {id: 200621, name: '잠자는 사자', value: 550},
                styleLimit: [4],
                tooltip: '위치 백분율이 75% 이상일때 발동. 발동은 어렵지만 된다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201201, name: 'VIP 안면 패스', value: 550},
                normal: {id: 201202, name: '능숙한 패스', value: 150},
                distanceLimit: [4],
                tooltip: '초반이나 중반에 발동된다고 가정',
                init: function () {
                    if (Math.random() < 0.333) {
                        this.randoms = thiz.initPhaseRandom(0)
                    } else {
                        this.randoms = thiz.initPhaseRandom(1)
                    }
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.accTimePassed(5) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201142, name: '경쾌한 스텝', value: 150},
                rare: {id: 201141, name: '신들린 스텝', value: 550},
                distanceLimit: [3],
                tooltip: '스타트후 20초에 발동한다고 가정',
                check: function () {
                    return thiz.isDistanceType(3) && thiz.accTimePassed(20)
                }
            },
            {
                normal: {id: 200562, name: '스태미나 킵', value: 150},
                rare: {id: 200561, name: '여유만만', value: 550},
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initIntervalRandom(1.0 / 12, 1.0 / 6)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2)
                        && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200692, name: '전개 살피기', value: 150},
                rare: {id: 200691, name: '혜안', value: 550},
                distanceLimit: [2],
                styleLimit: [3, 4],
                tooltip: '순위비율 50% 초과한다고 가정. 사실상 추입만 가능',
                init: function () {
                    this.randoms = thiz.initIntervalRandom(1.0 / 12, 1.0 / 6)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2)
                        && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201422, name: '짧은 휴식', value: 150},
                rare: {id: 201421, name: '릴랙스', value: 550},
                styleLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200442, name: '방패막이', value: 150},
                rare: {id: 200441, name: '강철 같은 의지', value: 550},
                init: function () {
                    this.randoms = thiz.initIntervalRandom(0, 0.666)
                },
                check: function (startPosition) {
                    thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201492, name: '냉정', value: 150},
                rare: {id: 201491, name: '냉정침착', value: 550},
                styleLimit: [4],
                tooltip: '중반 어딘가에서 발동된다고 가정.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.accTimePassed(10) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200472, name: '페이스 킵', value: 150},
                rare: {id: 200471, name: '꺾이지 않는 마음', value: 550},
                tooltip: '중반에서 발동한다고 가정.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200482, name: '마군 속 냉정', value: 150},
                rare: {id: 200481, name: '마이동풍', value: 550},
                tooltip: '중반에 발동한다고 가정. 실제 발동 가능여부는 본인 판단 (불가능 할것으로 판단됨)',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200762, name: '외장 탱크', value: 150},
                rare: {id: 200761, name: '위기 앞의 저력', value: 550},
                distanceLimit: [4],
                check: function () {
                    return thiz.isDistanceType(4) && thiz.sp <= thiz.spMax * 0.3
                }
            },
            {
                normal: {id: 0, name: '아오하루 점화・체력', value: 165},
                rare: {id: 0, name: '아오하루 연소・체력', value: 605},
                tooltip: '효과 1.1배로 취급',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 0, name: '고요한 호흡', value: 150},
                rare: {id: 0, name: '잠복 태세', value: 550},
                styleLimit: StyleLimit.Sasi,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0, {startRate: 0.5})
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(STYLE.SASI) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202001, name: '모래의 현자', heal: 550},
                normal: {id: 202002, name: '모래 먼지 익숙해지기', heal: 150},
                styleLimit: StyleLimit.Behind,
                surfaceLimit: SurfaceLimit.Dirt,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202071, name: '태연자약', heal: 750, speed: -0.15},
                normal: {id: 202072, name: '마이페이스', heal: 350, speed: -0.15},
                duration: 1.2,
                distanceLimit: DistanceLimit.Long,
                tooltip: '4-7위',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1, {endRate: 0.5})
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(DISTANCE.LONG) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202191, name: '일의전심', heal: 750},
                normal: {id: 202192, name: '빈틈 없음', heal: 350},
                styleLimit: StyleLimit.Sen,
                distanceLimit: DistanceLimit.Long,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1, {endRate: 0.5})
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(DISTANCE.LONG) && thiz.isRunningStyle(2) &&
                        thiz.isInRandom(this.randoms, startPosition) && thiz.startDelay < 0.08
                }
            },
            // End of heal skills
        ],
        targetSpeed: [
            {
                normal: {id: 200332, name: '코너 달인○', value: 0.15},
                rare: {id: 200331, name: '호선의 프로페서', value: 0.35},
                duration: 2.4,
                cd: 30,
                conditions: {
                    all_corner_random: 1
                }
            },
            {
                normal: {id: 200972, name: '단거리 코너○', value: 0.15},
                rare: {id: 200971, name: '단거리 코너◎', value: 0.25},
                duration: 3,
                distanceLimit: [1],
                conditions: {
                    all_corner_random: 1,
                    distance_type: 1
                }
            },
            {
                normal: {id: 201042, name: '마일 코너○', value: 0.15},
                rare: {id: 201041, name: '마일 코너◎', value: 0.25},
                duration: 3,
                distanceLimit: [2],
                conditions: {
                    all_corner_random: 1,
                    distance_type: 2
                }
            },
            {
                normal: {id: 201112, name: '중거리 코너○', value: 0.15},
                rare: {id: 201111, name: '중거리 코너◎', value: 0.25},
                duration: 3,
                distanceLimit: [3],
                conditions: {
                    all_corner_random: 1,
                    distance_type: 3
                }
            },
            {
                normal: {id: 201182, name: '장거리 코너○', value: 0.15},
                rare: {id: 201181, name: '장거리 코너◎', value: 0.25},
                duration: 3,
                distanceLimit: [4],
                conditions: {
                    all_corner_random: 1,
                    distance_type: 4
                }
            },
            {
                normal: {id: 201252, name: '도주 코너○', value: 0.15},
                rare: {id: 201251, name: '도주 코너◎', value: 0.25},
                duration: 3,
                styleLimit: [1],
                conditions: {
                    all_corner_random: 1,
                    running_style: 1
                }
            },
            {
                normal: {id: 201322, name: '선행 코너○', value: 0.15},
                rare: {id: 201321, name: '선행 코너◎', value: 0.25},
                duration: 3,
                styleLimit: [2],
                conditions: {
                    all_corner_random: 1,
                    running_style: 2
                }
            },
            {
                normal: {id: 201392, name: '선입 코너○', value: 0.15},
                rare: {id: 201391, name: '선입 코너◎', value: 0.25},
                duration: 3,
                styleLimit: [3],
                conditions: {
                    all_corner_random: 1,
                    running_style: 3
                }
            },
            {
                normal: {id: 201462, name: '추입 코너○', value: 0.15},
                rare: {id: 201461, name: '추입 코너◎', value: 0.25},
                duration: 3,
                styleLimit: [4],
                conditions: {
                    all_corner_random: 1,
                    running_style: 4
                }
            },
            {
                normal: {id: 200362, name: '직선 달인', value: 0.15},
                rare: {id: 200361, name: '한줄기 질풍', value: 0.35},
                duration: 2.4,
                cd: 30,
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200962, name: '단거리 직선○', value: 0.15},
                rare: {id: 200961, name: '단거리 직선◎', value: 0.25},
                duration: 3,
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201032, name: '마일 직선○', value: 0.15},
                rare: {id: 201031, name: '마일 직선◎', value: 0.25},
                duration: 3,
                distanceLimit: [2],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201102, name: '중거리 직선○', value: 0.15},
                rare: {id: 201101, name: '중거리 직선◎', value: 0.25},
                duration: 3,
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201172, name: '장거리 직선○', value: 0.15},
                rare: {id: 201171, name: '장거리 직선◎', value: 0.25},
                duration: 3,
                distanceLimit: [4],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201242, name: '도주 직선○', value: 0.15},
                rare: {id: 201241, name: '도주 직선◎', value: 0.25},
                duration: 3,
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201312, name: '선행 직선○', value: 0.15},
                rare: {id: 201311, name: '선행 직선◎', value: 0.25},
                duration: 3,
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201382, name: '선입 직선○', value: 0.15},
                rare: {id: 201381, name: '선입 직선◎', value: 0.25},
                duration: 3,
                styleLimit: [3],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201452, name: '추입 직선○', value: 0.15},
                rare: {id: 201451, name: '추입 직선◎', value: 0.25},
                duration: 3,
                styleLimit: [4],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200542, name: '빠른 걸음', value: 0.15},
                rare: {id: 200541, name: '탈출술', value: 0.35},
                duration: 3,
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200592, name: '위치 선정 밀어붙이기', value: 0.15},
                rare: {id: 200591, name: '신속 과감', value: 0.35},
                duration: 2.4,
                styleLimit: [3],
                tooltip: '순위>50% 충족한것으로 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201272, name: '선두 프라이드', value: 0.15},
                duration: 3,
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initIntervalRandom(0, 0.3)
                },
                check: function (startPosition) {
                    return thiz.accTimePassed(5) && thiz.isRunningStyle(1)
                        && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200582, name: '빠져나갈 준비', value: 0.15},
                rare: {id: 200581, name: '스피드 스터', value: 0.35},
                duration: 1.8,
                styleLimit: [2],
                tooltip: '순위<=50%는 충족한다고 가정',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200612, name: '외각 추월 준비', value: 0.15},
                rare: {id: 200611, name: '승천하는 용', value: 0.35},
                duration: 3,
                styleLimit: [3],
                tooltip: '최종 코너에서 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201412, name: '십만 마력', value: 0.15},
                rare: {id: 201411, name: '백만 마력', value: 0.35},
                duration: 2.4,
                styleLimit: [3],
                conditions: {
                    up_slope_random: 1,
                    running_style: 3
                }
            },
            {
                normal: {id: 200982, name: '큰 리드', value: 0.15},
                rare: {id: 200981, name: '압도적 리드', value: 0.35},
                duration: 3,
                distanceLimit: [1],
                styleLimit: [1],
                tooltip: '중반에 후방과 5마신 이상이라고 가정(터지기 쉽지 않음)',
                check: function () {
                    return thiz.isDistanceType(1) && thiz.curretPhase === 1
                }
            },
            {
                normal: {id: 200672, name: '바짝 붙기', targetSpeed: 0.15, acceleration: 0.05},
                rare: {id: 200671, name: '번갯불의 번뜩임', targetSpeed: 0.35, acceleration: 0.1},
                duration: 3,
                distanceLimit: [1],
                styleLimit: [3, 4],
                tooltip: '순위>50%충족한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200682, name: '적극책', value: 0.15},
                rare: {id: 200681, name: '마일의 지배자', value: 0.35},
                duration: 3,
                distanceLimit: [2],
                styleLimit: [1, 2],
                tooltip: '순위는 1등이라고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                normal: {id: 201052, name: '기어 시프트', value: 0.15},
                rare: {id: 201051, name: '기어 체인지', value: 0.35},
                duration: 2.4,
                distanceLimit: [2],
                styleLimit: [1, 2],
                tooltip: '순위<=50%만족한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201072, name: '오기', value: 0.15},
                rare: {id: 201071, name: '여장부 기질', value: 0.35},
                duration: 2.4,
                distanceLimit: [2],
                tooltip: '중반에 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                normal: {id: 200722, name: '템포 업', value: 0.15},
                rare: {id: 200721, name: '킬러 튠', value: 0.35},
                duration: 2.4,
                distanceLimit: [3],
                styleLimit: [1, 2],
                tooltip: '순위<=50%만족한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200732, name: '물고 늘어지기', targetSpeed: 0.15, acceleration: 0.05},
                rare: {id: 200731, name: '승리를 향한 집념', targetSpeed: 0.35, acceleration: 0.1},
                duration: 3,
                distanceLimit: [3],
                tooltip: '최종코너에서 발동한다고 가정.',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200752, name: '안쪽 코너 여포', value: 0.15},
                rare: {id: 200751, name: '내적 체험', value: 0.35},
                duration: 3,
                distanceLimit: [4],
                tooltip: '레인 안쪽에 있다고 가정',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201192, name: '리드 킵', value: 0.15},
                rare: {id: 201191, name: '선봉의 마음가짐', value: 0.35},
                duration: 3,
                distanceLimit: [4],
                tooltip: '중반에 3마신 이상 리드하고 있다고 가정 (거의 불가능)',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201662, name: '먼저 갑니다!', value: 0.35},
                normal: {id: 201661, name: '장난은 끝이야!', value: 0.15},
                duration: 3,
                tooltip: '중반에 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.accTimePassed(10) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201651, name: '슬립 스트림', value: 0.15},
                duration: 3,
                tooltip: '중반에 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.accTimePassed(10) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200632, name: '뛰어난 작전', value: 0.15},
                rare: {id: 0, name: '질풍노도', value: 0.35},
                duration: 3,
                styleLimit: [4],
                tooltip: '순위>75%만족한다고 가정. 실전에서는 위치에 주의',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201211, name: '노도의 추격', value: 0.35},
                normal: {id: 201212, name: '추격', value: 0.15},
                duration: 3,
                distanceLimit: [4],
                tooltip: '종반에 발동한다고 가정. 실제로는 이미 가속 다 됐을 가능성이 높음',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201082, name: '스피드 이터', value: 0.15},
                duration: 3,
                styleLimit: [1],
                distanceLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200462, name: '페이스 업', value: 0.15},
                rare: {id: 200461, name: '텐션 오르는데!', value: 0.35},
                duration: 1.8,
                tooltip: '중반에 발동된다고 가정.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function す(startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201672, name: '리커맨드', value: 0.15},
                rare: {id: 201671, name: '차트 급상승!', value: 0.35},
                duration: 2.4,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '중반에 발동된다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200512, name: '뒷심', value: 0.15},
                rare: {id: 200511, name: '전심전력', value: 0.35},
                duration: 2.4,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(3)
                },
                check: function (startPosition) {
                    return thiz.isInSpurt && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201611, name: '꼬리 올리기', value: 0.15},
                rare: {id: 201612, name: '꼬리의 폭포올리기', value: 0.35},
                duration: 3,
                check: function () {
                    return thiz.skillTriggerCount[1] >= 3
                }
            },
            {
                normal: {id: 0, name: '아오하루 점화・속도', value: 0.1725},
                rare: {id: 0, name: '아오하루 연소・속도', value: 0.4025},
                duration: 1.8,
                tooltip: '효과는 1.5배로 적용',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201702, name: '있는 대로 모두', value: 0.15},
                rare: {id: 201701, name: '결사의 각오', value: 0.35},
                duration: 2.4,
                check: function () {
                    return thiz.isInStraight() && thiz.isInSpurt
                }
            },
            {
                normal: {id: 202012, name: '거짓 주역', value: 0.15},
                rare: {id: 202011, name: '진 주역', value: 0.35},
                duration: 2.4,
                distanceLimit: DistanceLimit.Long,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1, {
                        startRate: 0.5,
                        endRate: 1
                    })
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 202021, name: '이른 작전', value: 0.05},
                rare: {id: 202022, name: '강공책', value: 0.25},
                duration: 4,
                styleLimit: StyleLimit.Oi,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201103, name: '광망일섬', value: 0.35},
                duration: 3,
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201173, name: '열풍일섬', value: 0.35},
                duration: 3,
                distanceLimit: [4],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 201453, name: '월영일섬', value: 0.35},
                duration: 3,
                styleLimit: StyleLimit.Oi,
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202061, name: '일본 최고의 우마무스메', value: 0.35},
                duration: 3,
                distanceLimit: [4],
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201591, name: '우마무스메 애호가', value: 0.15},
                rare: {id: 201592, name: '우마무스메 마니아', value: 0.35},
                duration: 3,
                tooltip: '출발 5초후 발동으로 처리',
                check: function () {
                    return thiz.accTimePassed(5)
                }
            },
            {
                rare: {id: 201271, name: '톱 러너', value: 0.35},
                duration: 3,
                styleLimit: StyleLimit.Nige,
                tooltip: '출발 5초후 발동으로 처리',
                check: function () {
                    return thiz.accTimePassed(5) && thiz.isRunningStyle(STYLE.NIGE)
                }
            },
            {
                rare: {id: 202101, name: '고양감', value: 0.35},
                normal: {id: 202102, name: '앞으로 기우뚱', value: 0.15},
                duration: 2.4,
                styleLimit: StyleLimit.Behind,
                distanceLimit: DistanceLimit.Middle,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202111, name: '파죽지세', value: 0.35},
                normal: {id: 202112, name: '기합충분', value: 0.15},
                duration: 1.8,
                distanceLimit: DistanceLimit.Mile,
                tooltip: '>=50%(5～9위)',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202131, name: '거친 선풍', value: 0.35},
                normal: {id: 202132, name: '기백을 넣고서', value: 0.15},
                duration: 1.8,
                styleLimit: [1],
                distanceLimit: [3],
                tooltip: '1～3위.디버프는 레어 0.15 / 일반 0.035.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function () {
                    return thiz.isDistanceType(3)
                }
            },
            {
                normal: {id: 202172, name: '내리막 달인', value: 0.15},
                duration: 2.4,
                conditions: {
                    down_slope_random: 1
                }
            },
            {
                rare: {id: 202041, name: '의기 충전', value: 0.35},
                normal: {id: 202042, name: '경쾌한 발걸음', value: 0.15},
                duration: 2.4,
                distanceLimit: [1],
                tooltip: '1～5위',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1, {startRate: 0.5})
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202261, name: '승리할 기회', value: 0.35},
                normal: {id: 202262, name: '밝을 징조', value: 0.15},
                duration: 2.4,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '1～5위',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1, {startRate: 0.5})
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202271, name: '권토중래', value: 0.35},
                normal: {id: 202272, name: '만회하기', value: 0.15},
                duration: 2.4,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '6～9위.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202281, name: '전속전진!', value: 0.35},
                normal: {id: 202282, name: '쏜살같이', value: 0.15},
                duration: 3,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '1～5위.',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(3)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.isInSpurt;
                }
            },
            {
                rare: {id: 202291, name: '명경지수', value: 0.35},
                normal: {id: 202292, name: '또렷한 생각', value: 0.15},
                duration: 1.8,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '6～9위.',
                check: function () {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isPhase(1)
                        && thiz.healTriggerCount > 0 && thiz.isInDistanceRate(0, 0.42);
                }
            },
            {
                rare: {id: 202301, name: '우아한 모래 목욕', value: 0.35},
                normal: {id: 202302, name: '모래 목욕○', value: 0.15},
                duration: 3,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '시작후 5초안에 발동된다고 가정. 도주는 알아서 체크하든 말든 할것',
                check: function () {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.accTimePassed(5)
                }
            },
        ],
        // End of target speed skills
        acceleration: [
            {
                normal: {id: 200342, name: '코너 가속○', value: 0.2},
                rare: {id: 200341, name: '곡선의 소믈리에', value: 0.4},
                duration: 3,
                cd: 30,
                conditions: {
                    all_corner_random: 1
                }
            },
            {
                normal: {id: 200372, name: '직선 가속', value: 0.2},
                rare: {id: 200371, name: '일진광풍', value: 0.4},
                duration: 3,
                cd: 30,
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200532, name: '앞장서기', value: 0.2},
                rare: {id: 200531, name: '선수 필승', value: 0.4},
                styleLimit: [1],
                duration: 1.2,
                check: function () {
                    return thiz.isRunningStyle(1) && thiz.currentPhase === 0
                }
            },
            {
                normal: {id: 200552, name: '굳히기 준비', value: 0.2},
                rare: {id: 200551, name: '도망자', value: 0.4},
                styleLimit: [1],
                duration: 3,
                tooltip: '1위 만족하고 있다고 가정',
                init: function () {
                    this.randoms = thiz.initFinalCornerRandom()
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 200601, name: '능숙한 환승', value: 0.4},
                normal: {id: 200602, name: '추월 확정 태세', value: 0.2},
                styleLimit: [3],
                duration: 1.8,
                tooltip: '순위>=50%만족하고 있다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200642, name: '직선 주파', value: 0.2},
                rare: {id: 200641, name: '육박하는 그림자', value: 0.4},
                duration: 0.9,
                styleLimit: [4],
                check: function () {
                    return thiz.isRunningStyle(4) && thiz.isInSpurt && !thiz.isInCorner()
                }
            },
            {
                normal: {id: 200652, name: '스프린트 기어', value: 0.2},
                rare: {id: 200651, name: '스프린트 터보', value: 0.4},
                duration: 3,
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initStraightRandom()
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200702, name: '상승기류', value: 0.2},
                rare: {id: 200701, name: '강인한 다리', value: 0.4},
                duration: 3,
                styleLimit: StyleLimit.Behind,
                distanceLimit: DistanceLimit.Mile,
                tooltip: '순위>50%만족한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200992, name: '선후책', value: 0.2},
                rare: {id: 200991, name: '플랜 X', value: 0.4},
                duration: 3,
                styleLimit: [1, 2],
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initIntervalRandom(5.0 / 12, 2.0 / 3)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201062, name: '액셀러레이션', value: 0.2},
                rare: {id: 201061, name: '액셀 전개!', value: 0.4},
                duration: 3,
                distanceLimit: [2],
                tooltip: '중반에 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201292, name: '두번째 화살', value: 0.2},
                duration: 3,
                styleLimit: [1],
                tooltip: '중간에서 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201332, name: '교묘한 스텝', value: 0.2},
                rare: {id: 201331, name: '기교파', value: 0.3},
                duration: 1.8,
                styleLimit: [2],
                tooltip: '스타트후 20초뒤에 발동한다고 가정',
                check: function () {
                    return thiz.isRunningStyle(2) && thiz.accTimePassed(20)
                }
            },
            {
                normal: {id: 201342, name: '직활강', value: 0.2},
                rare: {id: 201341, name: '결의의 직활강', value: 0.3},
                duration: 3,
                styleLimit: [2],
                conditions: {
                    down_slope_random: 1,
                    running_style: 2
                }
            },
            {
                normal: {id: 201581, name: '등산가', value: 0.2},
                duration: 3,
                conditions: {
                    up_slope_random: 1
                }
            },
            {
                normal: {id: 201362, name: '새 출발', value: 0.2},
                duration: 3,
                styleLimit: [2],
                tooltip: '순위>50%를 만족한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201402, name: '근면한 태도', value: 0.2},
                rare: {id: 201401, name: '노력가', value: 0.3},
                duration: 4,
                styleLimit: [3],
                tooltip: '중반에 발동한다고 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 200492, name: '뒤처지기 방지', value: 0.2},
                rare: {id: 200491, name: '논스톱 걸', value: 0.4},
                duration: 3,
                tooltip: '종반에 발동한다고 가정. 발동률은 본인 판단',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201601, name: '터다지기', value: 0.2},
                duration: 3,
                tooltip: '녹색스킬이나 컨센, 집중력과 같이 터진다고 가정',
                check: function () {
                    return true
                }
            },
            {
                normal: {id: 0, name: '아오하루 점화・힘', value: 0.22},
                rare: {id: 0, name: '아오하루 연소・힘', value: 0.44},
                duration: 1.2,
                tooltip: '효과는 1.1배로 가정',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 0, name: '앞줄 겨냥', value: 0.2},
                rare: {id: 0, name: '노리는 건 맨 앞줄!', value: 0.3},
                duration: 3,
                surfaceLimit: SurfaceLimit.Dirt,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                normal: {id: 201902, name: '정면승부', value: 0.2},
                rare: {id: 201901, name: '치열한 접전', value: 0.4},
                styleLimit: [2],
                duration: 1.8,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202081, name: '기사회생', value: 0.4},
                normal: {id: 202082, name: '원 찬스', value: 0.2},
                styleLimit: StyleLimit.Behind,
                distanceLimit: DistanceLimit.Middle,
                duration: 1.2,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(DISTANCE.MIDDLE) &&
                        thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202311, name: '노려라 센터!', value: 0.4},
                normal: {id: 202312, name: '기세충분', value: 0.2},
                duration: 3,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '1～5위',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202321, name: '폭주 모드!', value: 0.4},
                normal: {id: 202322, name: '급부상', value: 0.2},
                duration: 3,
                surfaceLimit: SurfaceLimit.Dirt,
                tooltip: '5～9위',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isSurfaceType(SURFACE.DIRT) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
        ],
        // End of acc skills
        boost: [
            {
                normal: {id: 0, name: '아오하루 점화・근성', targetSpeed: 0.055, acceleration: 0.11},
                rare: {id: 0, name: '아오하루 연소・근성', targetSpeed: 0.275, acceleration: 0.33},
                duration: 1.8,
                tooltip: '효과 1.1배로 계산',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 210061, name: '첫 별', targetSpeed: 0.3, acceleration: 0.36, heal: 420},
                normal: {id: 210062, name: '기라성', targetSpeed: 0.06, acceleration: 0.12, heal: 60},
                duration: 1.2,
                tooltip: '효과 1.2배로 계산(25승이상)',
                conditions: {
                    distance_rate_after_random: 50
                }
            },
            {
                rare: {id: 202091, name: '기염만장', targetSpeed: 0.25, heal: 350},
                normal: {id: 202092, name: '투쟁심', targetSpeed: 0.15, heal: 50},
                duration: 1.8,
                distanceLimit: DistanceLimit.Middle,
                tooltip: '중반 랜덤발동 취급',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202121, name: '대담무쌍', targetSpeed: 0.35, acceleration: 0.1},
                normal: {id: 202122, name: '두려워하지 않는 마음', targetSpeed: 0.15, acceleration: 0.05},
                styleLimit: [3],
                duration: 1.8,
                tooltip: '>=40% <=70%(4～6위)',
                init: function () {
                    this.randoms = thiz.initIntervalRandom(0.5, 1);
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                rare: {id: 202151, name: '용왕매진', targetSpeed: 0.45, heal: -400},
                normal: {id: 202152, name: '풀 스로틀', targetSpeed: 0.25, heal: -400},
                styleLimit: [3],
                duration: 2.4,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
        ],
        // End of boost skills
        gate: [
            {
                normal: {id: 200432, name: '집중력', value: 0.9},
                rare: {id: 200431, name: '컨센트레이션', value: 0.4},
                inherit: {id: 200433, name: '게이트 난동', value: 1.5},
            }
        ],
        speed: [
            {
                all: {name: '도주 주저', value: -1.5},
                duration: 3,
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 주저x2', value: -0.3},
                duration: 3,
                styleLimit: [1],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 주저', value: -0.15},
                duration: 3,
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 주저x2', value: -0.3},
                duration: 3,
                styleLimit: [2],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 주저', value: -0.15},
                duration: 3,
                styleLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 주저x2', value: -0.3},
                duration: 3,
                styleLimit: [3],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 주저', value: -0.15},
                duration: 3,
                styleLimit: [4],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 주저x2', value: -0.3},
                duration: 3,
                styleLimit: [4],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '후방 못박기', value: -0.2},
                duration: 3,
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                all: {name: '뇌새술', value: -0.25},
                duration: 3,
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                all: {name: '스피드 이터', value: -0.15},
                duration: 3,
                distanceLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '속박', value: -0.15},
                duration: 3,
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '독점력', value: -0.25},
                duration: 3,
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '시선', value: -0.15},
                duration: 3,
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '당신을 뒤쫓아서', value: -0.05},
                duration: 6,
                check: function () {
                    return thiz.position >= thiz.courseLength * 0.5
                }
            },
            {
                all: {name: '당신을 뒤쫓아서(계승)', value: -0.025},
                duration: 3.6,
                check: function () {
                    return thiz.position >= thiz.courseLength * 0.5
                }
            },
        ],
        fatigue: [
            {
                all: {name: '스태미나 이터', value: 50},
                distanceLimit: [4],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '스태미나 이터x2', value: 100},
                distanceLimit: [4],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 견제', value: 100},
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 견제x2', value: 200},
                styleLimit: [1],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 견제', value: 100},
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 견제x2', value: 200},
                styleLimit: [2],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 견제', value: 100},
                styleLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 견제x2', value: 200},
                styleLimit: [3],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 견제', value: 100},
                styleLimit: [4],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 견제x2', value: 200},
                styleLimit: [4],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 긴장', value: 100},
                styleLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 긴장x2', value: 200},
                styleLimit: [1],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(1) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 긴장', value: 100},
                styleLimit: [2],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선행 긴장x2', value: 200},
                styleLimit: [2],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(2) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 긴장', value: 100},
                styleLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '선입 긴장x2', value: 200},
                styleLimit: [3],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 긴장', value: 100},
                styleLimit: [4],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '추입 긴장x2', value: 200},
                styleLimit: [4],
                tooltip: '2번 맞았다고 가정. 기본 1회랑 중첩사용가능',
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isRunningStyle(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '도주 금지령', value: 300},
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                all: {name: '앞지르기 금지', value: 100},
                distanceLimit: [1],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(0)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(1) && thiz.isInRandom(this.randoms, startPosition)
                        && thiz.accTimePassed(5)
                }
            },
            {
                all: {name: '속삭임', value: 100},
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '속삭임x2', value: 200},
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '매혹적인 속삭임', value: 300},
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '매혹적인 속삭임x2', value: 600},
                distanceLimit: [3],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(3) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '날카로운 눈빛', value: 100},
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '날카로운 눈빛x2', value: 200},
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '사방팔방 째려보기', value: 300},
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '사방팔방 째려보기x2', value: 600},
                init: function () {
                    this.randoms = thiz.initPhaseRandom(2)
                },
                check: function (startPosition) {
                    return thiz.isInRandom(this.randoms, startPosition)
                }
            },
            {
                all: {name: '스태미나 그리드', value: 100},
                distanceLimit: [4],
                init: function () {
                    this.randoms = thiz.initPhaseRandom(1)
                },
                check: function (startPosition) {
                    return thiz.isDistanceType(4) && thiz.isInRandom(this.randoms, startPosition)
                }
            },
        ]
    }
}

const uniqueSkillData = (thiz) =>
    [
        {
            name: '  없음 / 발동하지 않음',
            noInherit: true,
            check: function () {
                return false
            }
        },
        {
            id: 10321, name: 'introduction：My body',
            noInherit: true,
            heal: 350,
            duration: 4,
            targetSpeed: 0.15,
            tooltip: '3～4위(<=40%)',
            check: function () {
                return thiz.position >= thiz.courseLength / 2.0 && thiz.isInCorner(thiz.position)
            }
        },
        {
            id: 100321, name: 'U=ma2',
            heal: 550,
            duration: 4,
            targetSpeed: 0.25,
            tooltip: '3～4위(<=40%)',
            check: function () {
                return thiz.position >= thiz.courseLength / 2.0 && thiz.isInCorner(thiz.position)
            }
        },
        {
            id: 10451, name: '클리어 하트',
            noInherit: true,
            heal: 550,
            tooltip: '순위조건의>=2＆<=40%는 만족한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(1)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100451, name: '퓨리티 오브 하트',
            heal: 750,
            tooltip: '2～4위(<=40%)',
            init: function () {
                this.randoms = thiz.initPhaseRandom(1)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10521, name: '두근두근 준비 땅!',
            noInherit: true,
            heal: 350,
            tooltip: '근처에 우마무스메가 있고, 순위<=50%는 만족한다고 가정',
            check: function () {
                return thiz.isInFinalCorner()
            }
        },
        {
            id: 100521, name: '두근두근 클라이맥스',
            heal: 550,
            tooltip: '근처에 우마무스메가 있고, 순위<=50%는 만족한다고 가정',
            check: function () {
                return thiz.isInFinalCorner()
            }
        },
        {
            id: 110111, name: '게인힐 슈피리어',
            heal: 750,
            tooltip: '중반에 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(1)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110011, name: '참말로 귀엽네♪머린 다이브',
            heal: 550,
            check: function () {
                return thiz.skillTriggerCount[1] >= 2
            }
        },
        {
            id: 0, name: 'Drain for rose',
            heal: 550,
            tooltip: '50%지점에서 즉시 발동한다고 가정',
            check: function (startPosition) {
                return thiz.isContainsRemainingDistance(thiz.courseLength * 0.5, startPosition)
            }
        },
        {
            id: 10071, name: '파란주의포!',
            noInherit: true,
            targetSpeed: 0.15,
            duration: 6,
            tooltip: '순위조건인<=50%는 만족한다고 가정',
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5 && thiz.position <= thiz.courseLength * 0.6
            }
        },
        {
            id: 100071, name: '불침항, 출항!',
            targetSpeed: 0.25,
            duration: 6,
            tooltip: '순위조건인<=50%는 만족한다고 가정',
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5 && thiz.position <= thiz.courseLength * 0.6
            }
        },
        {
            id: 100131, name: '존귀한 사명을 완수하기 위하여',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '순위<=30%는 만족한다고 가정',
            check: function () {
                return thiz.isInFinalCorner() || thiz.isInFinalStraight()
            }
        },
        {
            id: 100261, name: 'G00 1st.F∞;',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.temptationModeStart == null && thiz.startDelay < 0.08
                    && thiz.isInFinalStraight()
            }
        },
        {
            id: 110131, name: '최강의 이름을 걸고',
            targetSpeed: 0.35,
            duration: 6,
            tooltip: '최종 직선에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10081, name: '액셀X',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '200m위치에서 발동한다고 가정',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(200)
                    && thiz.position >= thiz.toPosition(200)
            }
        },
        {
            id: 100081, name: '커팅×DRIVE！',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '200m위치에서 발동한다고 가정',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(200)
                    && thiz.position >= thiz.toPosition(200)
            }
        },
        {
            id: 100061, name: '승리의 고동',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '순위는 만족한다고 가정',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(200)
                    && thiz.position >= thiz.toPosition(200)
            }
        },
        {
            id: 100171, name: '그대, 황제의 신위를 보라',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '종반에 3명 제쳤다고 가정',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 10181, name: '엠프리스 프라이드',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '나머지 다른 조건 모두 충족해서 최종 코너에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100181, name: '블레이즈 오브 프라이드',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '나머지 다른 조건 모두 충족해서 최종 코너에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10351, name: '전력 V 사인!',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '나머지 다른 조건 모두 충족해서 최종직선에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100351, name: '승리의 티켓을 너에게!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '나머지 다른 조건 모두 충족해서 최종직선에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10411, name: '반장+스피드=돌진',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '「레이스1/2～5/6의 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100411, name: '우등생x돌진=대승리!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '「레이스1/2～5/6의 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10561, name: '와주세요 와주세요!',
            noInherit: true,
            targetSpeed: 0.25,
            acceleration: 0.1,
            duration: 5,
            tooltip: '종반 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(2)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100561, name: '옵니다 오고 있습니다 오게 할 겁니다!',
            targetSpeed: 0.35,
            acceleration: 0.1,
            duration: 5,
            tooltip: '종반 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(2)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10601, name: '나도 가끔은 해야지, 안 그래?',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '라스트 스퍼트 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(3)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100601, name: '반드시 그 너머로...!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '라스트 스퍼트 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(3)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10111, name: '정신일도',
            noInherit: true,
            targetSpeed: 0.25,
            duration: 5,
            tooltip: '최종직선 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100111, name: '정신일도 하사불성',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종직선 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10611, name: 'Call me KING',
            noInherit: true,
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '4～6위(<=70%)',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(200)
                    && thiz.position >= thiz.toPosition(200)
                    && thiz.temptationModeStart == null && thiz.startDelay < 0.08
            }
        },
        {
            id: 100611, name: 'Pride of KING',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '4～6위(<=70%)',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(200)
                    && thiz.position >= thiz.toPosition(200)
                    && thiz.temptationModeStart == null && thiz.startDelay < 0.08
            }
        },
        {
            id: 100011, name: '슈팅 스타',
            targetSpeed: 0.35,
            duration: 5,
            acceleration: 0.1,
            init: function () {
                this.randoms = thiz.initPhaseRandom(2)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100021, name: '선두의 경치는 양보할 수 없어...!',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.isInInterval(0.5, 1)
            }
        },
        {
            id: 100031, name: '궁극의 테이오 스텝',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '다른 조건 무시하고 최종 직선에 발동하는 것으로 가정',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100151, name: '빅토리아에게 바치는 무도',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종 코너 어딘가에서 발동한다고 가정(어차피 안터질듯)',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100161, name: 'Shadow Break',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '경합상태고, 2～7위(<=75%)',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100231, name: '∴win Q.E.D.',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종코너 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100301, name: '블루 로즈 체이서',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종 직선 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100501, name: 'Nemesis',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종코너 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110031, name: '절대는, 나야',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종 직선 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110241, name: '플라워리☆머누버(前)',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종코너 전방 어딘가에서 발동한다고 가정.',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110181, name: '훈풍, 영원한 순간을',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '중반 어딘가에서 발동으로 가정하지만 거의 안터짐.',
            init: function () {
                this.randoms = thiz.initPhaseRandom(1)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100121, name: '결투!데드히트!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종 직선 어딘가에서 발동한다고 가정.',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110041, name: '뭉클하게♪Chu',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5 && thiz.healTriggerCount > 0
            }
        },
        {
            id: 100371, name: 'Schwarze Schwert',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.isInFinalStraight() && thiz.temptationModeStart == null
                    && thiz.startDelay < 0.08
            }
        },
        {
            id: 0, name: '벼가 곧 무르익는다',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '50%-60%지점에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 0.6)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 0, name: '존귀☆라스트 스퍼━━(ﾟ∀ﾟ)━━트!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '종반 이후에 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhaseRandom(2)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 0, name: '공주다운 자, 승리를 이 손에',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '최종 직선 들어가자마자 발동한다고 가정',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 0, name: '당신을 뒤쫓아서',
            targetSpeed: 0.25,
            duration: 6,
            tooltip: '순위조건은 만족한다고 가정',
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5
            }
        },
        {
            id: 100171, name: '어스름은 물렀거라, 떠들썩함의 화살',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.isInFinalCorner();
            }
        },
        {
            id: 100481, name: 'YEAH☆VIVID TIME!',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.isInFinalStraight();
            }
        },
        {
            id: 100231, name: 'Presents from X',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5
            }
        },
        {
            id: 100041, name: '홍염기어/LP1211-M',
            acceleration: 0.4,
            duration: 4,
            tooltip: '순위<=5및<=50%는 만족한다고 가정(어느 각질이어도 최속 발동).',
            check: function () {
                return thiz.isInFinalCorner() || thiz.isInFinalStraight()
            }
        },
        {
            id: 100101, name: '빅토리 샷!',
            acceleration: 0.4,
            duration: 4,
            tooltip: '순위>=3및 <=50%는 만족한다고 가정',
            check: function () {
                return thiz.isInFinalCorner(thiz.position, {start: 0.5, end: 1})
            }
        },
        {
            id: 10271, name: '타올라라 근육!',
            noInherit: true,
            acceleration: 0.3,
            duration: 4,
            styleLimit: [3, 4],
            tooltip: '항상 순위>=65%및<=70%는 만족한다고 가정',
            check: function () {
                return thiz.currentPhase >= 2 && thiz.isInCorner()
            }
        },
        {
            id: 100271, name: '레츠 아나볼릭!',
            acceleration: 0.4,
            duration: 4,
            styleLimit: [3, 4],
            tooltip: '항상 순위>=65%및<=70%는 만족한다고 가정.',
            check: function () {
                return thiz.currentPhase >= 2 && thiz.isInCorner()
            }
        },
        {
            id: 100201, name: '앵글링x스키밍',
            acceleration: 0.4,
            duration: 4,
            styleLimit: [1, 2],
            tooltip: '순위1위 만족한다고 가정',
            check: function () {
                return thiz.currentPhase >= 2 && thiz.isInCorner()
            }
        },
        {
            id: 110241, name: '플라워리☆머누버(후)',
            acceleration: 0.4,
            duration: 4,
            tooltip: '최종코너 어딘가에서 발동한다고 가정. 후방에서 발동',
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100131, name: '콘도르 맹격파',
            acceleration: 0.4,
            duration: 4,
            init: function () {
                this.randoms = thiz.initFinalCornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 0, name: 'KEEP IT REAL.',
            acceleration: 0.3,
            duration: 6,
            tooltip: '50%지점에서 발동한다고 가정',
            check: function () {
                return thiz.position >= thiz.courseLength / 2.0
            }
        },
        {
            id: 100591, name: '저곳, 그 너머로...',
            acceleration: 0.4,
            duration: 4,
            styleLimit: [3, 4],
            tooltip: '항상순위>=50%및<=70%는 만족한다고 가정',
            check: function () {
                return thiz.temptationModeStart == null &&
                    ((thiz.currentPhase >= 2 && !thiz.isInFinalCorner() && thiz.isInCorner()) ||
                        (thiz.currentPhase === 1 && thiz.isInFinalCorner() && thiz.isInCorner()))
            }
        },
        {
            id: 10091, name: '레드 에이스',
            noInherit: true,
            boost: {
                targetSpeed: 0.15,
                acceleration: 0.2
            },
            duration: 5,
            tooltip: '레이스1/2～5/6의 어딘가에서 발동한다고 가정.',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100091, name: '브릴리언트 레드 에이스',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '레이스1/2～5/6의 어딘가에서 발동한다고 가정.',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 10141, name: '열혈☆아미고',
            noInherit: true,
            boost: {
                targetSpeed: 0.15,
                acceleration: 0.2
            },
            duration: 5,
            tooltip: '순위2위 이내는 만족한다고 가정',
            check: function () {
                return thiz.isInFinalStraight() && thiz.sp >= 0.3 * thiz.spMax
            }
        },
        {
            id: 100141, name: '플란차☆가나도르',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '순위2이내는 만족한다고 가정. 최종 직선에 들어간 순간 발동한다고 가정.',
            check: function () {
                return thiz.isInFinalStraight() && thiz.sp >= 0.3 * thiz.spMax
            }
        },
        {
            id: 10241, name: '승리의 키스☆',
            noInherit: true,
            boost: {
                targetSpeed: 0.15,
                acceleration: 0.2
            },
            duration: 5,
            tooltip: '최종 코너에서 발동한다고 가정',
            check: function () {
                return thiz.isInFinalCorner()
            }
        },
        {
            id: 100241, name: '번뜩임☆랜딩',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '최종 코너에서 발동한다고 가정',
            check: function () {
                return thiz.isInFinalCorner()
            }
        },
        {
            id: 100381, name: '#LookatCurren',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '2～4위(<=40%).레이스 50%-65%사이에 발동.',
            init: function () {
                this.randoms = thiz.initIntervalRandom(0.5, 0.65)
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 100461, name: '반짝반짝☆STARDOM',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '중반 코너가 아닌 지점에서 즉시발동으로 가정',
            check: function (startPosition) {
                return !thiz.isInCorner(startPosition) && thiz.getPhase(startPosition) === 1
            }
        },
        {
            id: 100581, name: 'I Never Goof Up!',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '종반 코너 어딘가에서 발동한다고 가정',
            init: function () {
                this.randoms = thiz.initPhase2CornerRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 0, name: 'I\'M☆FULL☆SPEED!!',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '순위는 만족한다고 가정',
            check: function () {
                return thiz.isInDistanceRate(0.45, 0.6) && thiz.isSPInRange(0, 0.7)
            }
        },
        {
            id: 0, name: '빙글빙글 마미트릭♡',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '최종 직선에 들어간 순간 발동으로 가정. 순위는 만족한다고 가정.',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 110401, name: 'GET DOWN',
            boost: {
                targetSpeed: 0.25,
                acceleration: 0.3
            },
            duration: 5,
            tooltip: '최종 코너에 들어간 순간 발동한다고 가정. 순위는 만족한다고 가정.',
            check: function () {
                return thiz.isInFinalCorner();
            }
        },
        {
            id: 110061, name: '성야의 미라클 런!',
            targetSpeed: 0.25,
            acceleration: 0.3,
            heal: 350,
            duration: 5,
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5 && thiz.healTriggerCount >= 3
            }
        },
        {
            id: 100221, name: 'Fairy tale',
            targetSpeed: 0.35,
            duration: 5,
            check: function () {
                return thiz.position >= thiz.courseLength * 0.52
            }
        },
        {
            id: 100211, name: '하얀 번개, 보여줄끼다!',
            targetSpeed: 0.35,
            acceleration: 0.1,
            duration: 5,
            check: function () {
                return thiz.isInStraight() && thiz.position >= thiz.courseLength * 0.5
            }
        },
        {
            id: 110521, name: '113전 114기',
            targetSpeed: 0.25,
            duration: 6,
            tooltip: '6초 지속으로 가정',
            check: function () {
                return thiz.isInFinalCorner()
            }
        },
        {
            id: 110151, name: '복 주는 바르카롤',
            targetSpeed: 0.45,
            duration: 4,
            tooltip: '7번 스킬 사용했다고 가정. (안그러면 너무 약함)',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(400)
                    && thiz.position >= thiz.toPosition(400)
            }
        },
        {
            id: 100691, hid: 900691, name: '동경은 벚꽃을 넘는다!',
            targetSpeed: 0.35,
            duration: 5,
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(300)
                    && thiz.position >= thiz.toPosition(300)
            }
        },
        {
            id: 110261, name: '오퍼레이션 Cacao',
            targetSpeed: 0.35,
            heal: 150,
            duration: 5,
            check: function () {
                return thiz.currentPhase === 1 && thiz.isInCorner()
            }
        },
        {
            id: 110371, name: 'Guten Appetit♪',
            targetSpeed: 0.35,
            duration: 6,
            tooltip: '최종 코너에서 3명 제쳤다고 가정',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100331, name: '디오스쿠로이의 유성',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '7～9위(>=80%)의 경우. 다른 경우는 다른 최종 직선 0.35 고유로 대체하면됨.',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100681, name: '승리의 함성, 어기여차!',
            targetSpeed: 0.25,
            acceleration: 0.3,
            duration: 5,
            tooltip: '1～2위',
            check: function () {
                return (thiz.isPhase(2) && thiz.isStraightFrontType(2)) ||
                    (thiz.isInInterval(0.5, 1) && thiz.isInCorner(null, 3))
            }
        },
        {
            id: 10621, name: '레디, 땅!',
            noInherit: true,
            targetSpeed: 0.15,
            heal: 350,
            duration: 5,
            tooltip: '3～6위(<=70%)',
            check: function () {
                return thiz.isInInterval(0.5, 1) && thiz.isPhase(1)
            }
        },
        {
            id: 100621, name: '땅, 팟, 뭉',
            targetSpeed: 0.25,
            heal: 550,
            duration: 5,
            tooltip: '3～6위(<=70%)',
            check: function () {
                return thiz.isInInterval(0.5, 1) && thiz.isPhase(1)
            }
        },
        {
            id: 100051, name: '빛나는 별의 보드빌',
            targetSpeed: 0.45,
            duration: 5,
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100671, name: '어둠을 비추는 영원한 반짝임',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '2～5위. 발동시 선두에서 5m 이내인 경우.',
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100711, name: '일기의 꿈, 찰나의 비상',
            targetSpeed: 0.45,
            heal: -100,
            duration: 4,
            check: function () {
                return thiz.isInFinalStraight()
            }
        },
        {
            id: 100741, name: '아름다운 화신풍',
            targetSpeed: 0.15,
            duration: 5,
            tooltip: '4～7위',
            conditions: {
                distance_rate: '>=50'
            },
            trigger: function (skill) {
                const map = {
                    2000: 1,
                    2400: 1.5,
                    2600: 2,
                    2800: 2.2,
                    3000: 2.5,
                    3200: 3,
                    3500: 3.5,
                    99999999: 4,
                }
                for (const key in map) {
                    if (thiz.sp < key) {
                        skill.duration *= map[key]
                        return {
                            extended: map[key].toString()
                        }
                    }
                }
            }
        },
        {
            id: 110051, name: 'Ravissant',
            targetSpeed: 0.45,
            duration: 4,
            check: function () {
                return thiz.isInFinalCorner() || thiz.isInFinalStraight()
            }
        },
        {
            id: 110201, name: 'Do Ya Breakin!',
            targetSpeed: 0.35,
            acceleration: 0.1,
            duration: 5,
            tooltip: '항상 정면에서 발동한다고 가정.',
            check: function () {
                return (thiz.isPhase(2) || thiz.isPhase(3)) &&
                    (thiz.isInStraight())
            }
        },
        {
            id: 110511, name: '꽃봉오리, 피어날 때',
            acceleration: 0.4,
            duration: 4,
            check: function () {
                return (thiz.isPhase(2) || thiz.isPhase(3)) &&
                    (thiz.isInFinalStraight() || thiz.isInFinalCorner(thiz.position, {start: 0.5, end: 1}))
            }
        },
        {
            id: 100721, name: '열화요란, 무적의 춤',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '<=40%(1～4위)',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(300)
                    && thiz.position >= thiz.toPosition(300)
            }
        },
        {
            id: 110601, name: 'Go☆Go☆for it!',
            targetSpeed: 0.35,
            duration: 6,
            tooltip: '>=40% <=70%(4～6위)、4인기 이하',
            check: function () {
                return thiz.isInFinalStraight();
            }
        },
        {
            id: 110611, name: '울려퍼져라! 트레센 응원단!!',
            acceleration: 0.4,
            duration: 4,
            tooltip: '거리50%이상 6～9위',
            check: function () {
                return thiz.isInFinalStraight() && thiz.temptationModeStart == null;
            }
        },
        {
            id: 100311, name: '차지 완료! 전속 전진!',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '도쿄 경기장에서만, 1~2위',
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(300)
                    && thiz.position >= thiz.toPosition(300)
            }
        },
        {
            id: 100641, name: '따돌리기 로드',
            heal: 550,
            targetSpeed: 0.25,
            duration: 6,
            tooltip: '거리50%이상 1～2위',
            check: function () {
                return thiz.position >= thiz.courseLength * 0.5;
            }
        },
        {
            id: 110221, name: 'Best day ever',
            targetSpeed: 0.35,
            acceleration: 0.1,
            duration: 5,
            tooltip: '2～4위. 가속력은 나머지 401m 이상 있을 경우',
            check: function () {
                return thiz.currentPhase >= 2 && thiz.isInFinalCorner();
            }
        },
        {
            id: 110381, name: 'One True Color',
            targetSpeed: 0.25,
            acceleration: 0.3,
            duration: 5,
            tooltip: '2～4위,후방과 1마신 이내.',
            check: function (startPosition) {
                return thiz.isContainsRemainingDistance(350, startPosition)
            }
        },
        {
            id: 100341, name: '쾌주로다, 쾌주로다!',
            targetSpeed: 0.45,
            duration: 5,
            tooltip: '최종 직선에서 랜덤 발동',
            init: function () {
                this.randoms = thiz.initFinalStraightRandom()
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            }
        },
        {
            id: 110101, name: 'Joyful Voyage!',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '2～4위. 속도가 바뀌는것은 무시',
            check: function (startPosition) {
                return thiz.isContainsRemainingDistance(200, startPosition)
            }
        },
        {
            id: 110591, name: '설렘이 부르는 쪽으로',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '4～7위.',
            check: function () {
                return thiz.position >= thiz.courseLength * 0.6 &&
                    thiz.courseLength * thiz.position >= 500 &&
                    thiz.isInSlope('down');
            }
        },
        {
            id: 100361, hid: 900361, name: 'trigger:BEAT',
            targetSpeed: 0.35,
            duration: 5,
            tooltip: '4～7위.',
            check: function (startPosition) {
                return thiz.isInFinalStraight(startPosition);
            }
        },
        {
            id: 120131, hid: 920131, name: '반짝이는 건 바다, 눈부신 건 그대',
            targetSpeed: 0.15,
            duration: 5,
            tooltip: '1～4위',
            conditions: {
                distance_rate: '>=50'
            },
            trigger: function (skill) {
                const map = {
                    2000: 1,
                    2400: 1.5,
                    2600: 2,
                    2800: 2.2,
                    3000: 2.5,
                    3200: 3,
                    3500: 3.5,
                    99999999: 4,
                }
                for (const key in map) {
                    if (thiz.sp < key) {
                        skill.duration *= map[key]
                        return {
                            extended: map[key].toString()
                        }
                    }
                }
            }
        },
        {
            id: 100441, hid: 900441, name: '받아가겠어☆스트렐리치아!',
            targetSpeed: 0.35,
            duration: 6,
            check: function (startPosition) {
                return startPosition <= thiz.toPosition(300)
                    && thiz.position >= thiz.toPosition(300)
                    && thiz.temptationModeStart == null;
            }
        },
        {
            id: 100981, hid: 900981, name: '운을 열어젖혀 날아오르리',
            targetSpeed: 0.25,
            acceleration: 0,
            duration: 5,
            init: function () {
                this.randoms = thiz.initPhaseRandom(1, {startRate: 0.5})
            },
            check: function (startPosition) {
                return thiz.isInRandom(this.randoms, startPosition)
            },
            trigger: function (skill) {
                if (skill.id === 900981) {
                    skill.targetSpeed = 0.05;
                    skill.acceleration = 0;
                    return;
                }
                const rate = [0, 0, 0, 1, 1, 2];
                skill.targetSpeed = 0.25 + (thiz.passiveTriggered > 5 ? 3 : rate[thiz.passiveTriggered]) * 0.05;
                skill.acceleration = (thiz.passiveTriggered > 5 ? 3 : rate[thiz.passiveTriggered]) * 0.05;
            },
        },

// End of unique skills
].sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})

export {normalSkillData, uniqueSkillData}
