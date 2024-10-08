<template>
    <li
        class="dropdown"
        :class="{
            'highlight': highlighted,
            'highlight-consistent':
                highlightedConsistend ||
                (isPiggyBankMode && highlightSales && saleActive),
            'adjust-heights': coinsInNav && saleActive,
        }"
        :id="id"
        :title="`${$t('credits')}: ${creditsLocalized}\n${$t(
            'coins'
        )}: ${coinsLocalized}`"
        :style="
            showAlertProgressBar
                ? `background-image: linear-gradient(0deg, black 0px, black 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) calc(100% - 1px), black calc(100% - 1px), black 100%), linear-gradient(90deg, black 0px, black 1px, rgb(0, 255, 0) 1px, rgb(0, 255, 0) ${alertProgressPercentage}%, rgba(255, 0, 0, 0.5) ${
                      alertProgressPercentage + 0.01
                  }%, rgba(255, 0, 0, 0.5) calc(100% - 1px), black calc(100% - 1px), black 100%)`
                : null
        "
        :data-progress="showAlertProgressBar"
        @click="() => (highlightedConsistend = false)"
    >
        <a
            href="#"
            class="dropdown-toggle"
            :class="{ 'piggy-bank-mode': isPiggyBankMode }"
            :id="menuId"
            role="button"
            data-toggle="dropdown"
        >
            <template v-if="creditsInNav || coinsInNav">
                <span v-if="creditsInNav">
                    <img
                        :src="creditsIcon"
                        :alt="$t('credits')"
                        class="navbar-icon"
                    />
                    {{ creditsLocalized }}
                </span>
                <span
                    v-if="coinsInNav"
                    class="coins-span"
                    :class="{
                        'highlight-consistent': highlightSales && saleActive,
                    }"
                >
                    <span>
                        <img
                            :src="coinsIcon"
                            :alt="$t('coins')"
                            class="navbar-icon"
                        />
                        {{ coinsLocalized }}
                    </span>
                    <span
                        v-if="showSales"
                        ref="sale_countdown_clone"
                        class="sale-countdown"
                    ></span>
                </span>
            </template>
            <span class="fa-2x" v-else>
                <font-awesome-icon
                    :icon="faDollarSign"
                    transform="shrink-10"
                    :mask="faPiggyBank"
                ></font-awesome-icon>
            </span>
            <b class="caret"></b>
        </a>
        <ul class="dropdown-menu" role="menu" :aria-labelledby="menuId">
            <li role="presentation" class="flex-li">
                <a href="/credits" class="lightbox-open">
                    <img
                        :src="creditsIcon"
                        :alt="$t('credits')"
                        class="navbar-icon"
                    />
                    {{ $t('credits') }}: {{ creditsLocalized }}
                </a>
                <button
                    href="/credits/daily"
                    class="lightbox-open btn btn-xs btn-default pull-right"
                    :title="$m('credits.daily')"
                >
                    <font-awesome-icon :icon="faTable"></font-awesome-icon>
                </button>
                <button
                    href="/credits/overview"
                    class="lightbox-open btn btn-xs btn-default pull-right"
                    :title="$m('credits.overview')"
                >
                    <font-awesome-icon :icon="faChartBar"></font-awesome-icon>
                </button>
            </li>
            <li class="flex-li">
                <a
                    href="/coins"
                    class="lightbox-open"
                    :class="{
                        'sale-active': saleActive,
                        'highlight-consistent': highlightSales && saleActive,
                    }"
                >
                    <img
                        :src="coinsIcon"
                        :alt="$t('coins')"
                        class="navbar-icon"
                    />
                    {{ $t('coins') }}: {{ coinsLocalized }}
                    <div
                        v-if="showSales"
                        id="sale_countdown"
                        ref="sale_countdown"
                    ></div>
                </a>
                <button
                    href="/coins/list"
                    class="lightbox-open btn btn-xs btn-default pull-right"
                    :title="$m('coins.list')"
                >
                    <font-awesome-icon :icon="faListUl"></font-awesome-icon>
                </button>
            </li>
            <li class="divider"></li>
            <li class="no-link">
                {{ $m('totalEarnedCredits') }}:
                <ul class="no-style-list">
                    <li>{{ totalCredits.toLocaleString() }}</li>
                </ul>
            </li>
            <li v-if="nextRank">
                <a href="/level" class="lightbox-open">
                    {{ $m('nextRank') }}:
                    <ul class="no-style-list">
                        <li>{{ nextRank }}</li>
                        <li>
                            {{ nextRankMissing.toLocaleString() }}
                            {{ $t('credits') }}
                            {{ $m('nextRankMissing') }}
                        </li>
                    </ul>
                </a>
            </li>
            <li v-if="showToplistPosition" role="presentation">
                <a :href="toplistSite" class="lightbox-open">
                    {{ $m('toplistPositionName') }}:
                    {{ toplistPosition.toLocaleString() }}
                </a>
            </li>
            <template
                v-if="creditsAPI.credits_alliance_active && !hideAllianceFunds"
            >
                <li class="divider"></li>
                <li>
                    <a href="/verband/kasse" class="lightbox-open">
                        {{ $m('allianceFunds.title') }}
                        <ul class="no-style-list">
                            <li>
                                {{
                                    creditsAPI.credits_alliance_current.toLocaleString()
                                }}
                                {{ $t('credits') }}
                                {{ $m('allianceFunds.currently') }}
                            </li>
                            <li>
                                {{
                                    creditsAPI.credits_alliance_total.toLocaleString()
                                }}
                                {{ $t('credits') }}
                                {{ $m('allianceFunds.total') }}
                            </li>
                            <li class="divider"></li>
                            <li class="no-link">
                                <em>{{ $m('allianceFunds.updateNote') }}</em>
                            </li>
                        </ul>
                    </a>
                </li>
            </template>
        </ul>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';

import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faListUl } from '@fortawesome/free-solid-svg-icons/faListUl';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';
import { mapState } from 'pinia';
import { useAPIStore } from '@stores/api';
import { defineRootStore, useRootStore } from '@stores/index';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type VueI18n from 'vue-i18n';

export default Vue.extend<
    {
        id: string;
        menuId: string;
        faChartBar: IconDefinition;
        faDollarSign: IconDefinition;
        faListUl: IconDefinition;
        faPiggyBank: IconDefinition;
        faTable: IconDefinition;
        creditsIcon: string;
        coinsIcon: string;
        highlighted: boolean;
        highlightedConsistend: boolean;
        ranks: Record<string, string>;
        creditsInNav: boolean;
        coinsInNav: boolean;
        showToplistPosition: boolean;
        saleActive: boolean;
        creditsAPI: {
            credits_user_total: number;
            user_toplist_position: number;
            credits_alliance_active: boolean;
            credits_alliance_current: number;
            credits_alliance_total: number;
        };
        hideAllianceFunds: boolean;
        showAlertProgressBar: boolean;
        alertProgressPercentage: number;
    },
    {
        $m(
            key: string,
            args?: Record<string, unknown>
        ): VueI18n.TranslateResult;
        highlight(): void;
    },
    {
        credits: number;
        creditsLocalized: string;
        coins: number;
        coinsLocalized: string;
        totalCredits: number;
        nextRankCredits: number;
        nextRank: string;
        nextRankMissing: number;
        toplistPosition: number;
        toplistSite: string;
        isPiggyBankMode: boolean;
    },
    {
        MODULE_ID: string;
        showSales: boolean;
        highlightSales: boolean;
        getSetting<Type = boolean>(settingId: string): Promise<Type>;
    }
>({
    name: 'lssmv4-creditsextension-menu',
    components: {},
    data() {
        const rootStore = useRootStore();
        return {
            id: rootStore.nodeAttribute(this.MODULE_ID, true),
            menuId: rootStore.nodeAttribute(`${this.MODULE_ID}-menu`),
            faChartBar,
            faDollarSign,
            faListUl,
            faPiggyBank,
            faTable,
            creditsIcon: '',
            coinsIcon: '',
            highlighted: false,
            highlightedConsistend: false,
            ranks: this.$t(
                `ranks.${rootStore.gameFlavour}`
            ) as unknown as Record<string, string>,
            creditsInNav: false,
            coinsInNav: false,
            showToplistPosition: false,
            saleActive: false,
            creditsAPI: {
                credits_user_total: 0,
                user_toplist_position: 0,
                credits_alliance_active: false,
                credits_alliance_current: 0,
                credits_alliance_total: 0,
            },
            hideAllianceFunds: false,
            showAlertProgressBar: false,
            alertProgressPercentage: 0,
        };
    },
    props: {
        MODULE_ID: {
            type: String,
            required: true,
        },
        showSales: {
            type: Boolean,
            required: true,
        },
        highlightSales: {
            type: Boolean,
            required: true,
        },
        getSetting: {
            type: Function,
            required: true,
        },
    },
    computed: {
        ...mapState(defineRootStore, ['credits', 'coins']),
        creditsLocalized() {
            return this.credits.toLocaleString();
        },
        coinsLocalized() {
            return this.coins.toLocaleString();
        },
        totalCredits() {
            return this.creditsAPI.credits_user_total;
        },
        nextRankCredits() {
            return (
                Object.keys(this.ranks)
                    .map(credits => parseInt(credits))
                    .find(credits => credits > this.totalCredits) ?? -1
            );
        },
        nextRank() {
            return this.ranks[this.nextRankCredits] ?? '';
        },
        nextRankMissing() {
            return this.nextRankCredits - this.totalCredits;
        },
        toplistPosition() {
            return this.creditsAPI.user_toplist_position;
        },
        toplistSite() {
            return `/toplist?page=${Math.ceil(this.toplistPosition / 20)}`;
        },
        isPiggyBankMode() {
            return !(this.creditsInNav || this.coinsInNav);
        },
    },
    watch: {
        credits() {
            this.highlight();
        },
        coins() {
            this.highlight();
        },
    },
    methods: {
        $m(key, args) {
            return this.$t(`modules.${this.MODULE_ID}.${key}`, args);
        },
        highlight() {
            this.highlighted = false;
            window.setTimeout(() => (this.highlighted = true), 10);
        },
    },
    beforeMount() {
        const rootStore = useRootStore();

        const creditsIcon = document.querySelector<HTMLImageElement>(
            '#navigation_top > img.navbar-icon'
        )?.src;
        if (creditsIcon) this.creditsIcon = creditsIcon;
        const coinsIcon = document.querySelector<HTMLImageElement>(
            '#coins_top > img.navbar-icon'
        )?.src;
        if (coinsIcon) this.coinsIcon = coinsIcon;

        useAPIStore().autoUpdateCredits(
            this.MODULE_ID,
            ({
                value: {
                    credits_user_total,
                    user_toplist_position,
                    credits_alliance_active,
                    credits_alliance_current,
                    credits_alliance_total,
                },
            }) =>
                this.$set(this, 'creditsAPI', {
                    credits_user_total,
                    user_toplist_position,
                    credits_alliance_active,
                    credits_alliance_current,
                    credits_alliance_total,
                })
        );

        this.getSetting('creditsInNavbar').then(value =>
            this.$set(this, 'creditsInNav', value)
        );
        this.getSetting('coinsInNavbar').then(value =>
            this.$set(this, 'coinsInNav', value)
        );
        this.getSetting('showToplistPosition').then(value =>
            this.$set(this, 'showToplistPosition', value)
        );
        this.getSetting('hideAllianceFunds').then(value =>
            this.$set(this, 'hideAllianceFunds', value)
        );
        this.getSetting('showAlertProgressBar').then(value =>
            this.$set(this, 'showAlertProgressBar', value)
        );

        this.getSetting<{ enabled: boolean; value: { credits: number }[] }>(
            'alerts'
        ).then(({ value: alerts }) => {
            if (!alerts.length) return;
            const alertValues = alerts.map(({ credits }) => credits).sort();

            const findNextAlertValue = (current: number) =>
                alertValues.find(value => value > current) ?? 0;

            window.addEventListener(`${PREFIX}_credits_update`, ev => {
                const { new: newValue, old: oldValue } = (<
                    CustomEvent<{ new: number; old: number; diff: number }>
                >ev).detail;
                if (newValue < oldValue) return;
                alerts.forEach(({ credits }) => {
                    if (oldValue < credits && newValue >= credits)
                        this.highlightedConsistend = true;
                });
                this.alertProgressPercentage =
                    (newValue / findNextAlertValue(newValue)) * 100;
            });

            useAPIStore()
                .getCredits('creditsextension-alerts-initial')
                .then(
                    ({ value: { credits_user_current } }) =>
                        (this.alertProgressPercentage =
                            (credits_user_current /
                                findNextAlertValue(credits_user_current)) *
                            100)
                );
        });

        if (this.showSales) {
            (async () => {
                rootStore.hook({
                    event: 'coinsUpdate',
                    callback: () => {
                        this.$set(
                            this,
                            'saleActive',
                            window.sale_count_down > Date.now()
                        );
                    },
                });
                rootStore.hook({
                    event: 'updateSaleCountDown',
                    callback: () => {
                        if (
                            this.$refs.sale_countdown &&
                            this.$refs.sale_countdown_clone &&
                            this.$refs.sale_countdown instanceof HTMLElement &&
                            this.$refs.sale_countdown_clone instanceof
                                HTMLElement
                        ) {
                            this.$refs.sale_countdown_clone.textContent =
                                this.$refs.sale_countdown.textContent ?? '';
                        }
                    },
                });
                window.coinsUpdate(rootStore.coins);
            })().then();
        }
    },
});
</script>

<style scoped lang="sass">
@use "sass:math"

.highlight-consistent
    background: #62c462

.adjust-heights
    $adjusted-height: 50.5px
    height: $adjusted-height

    > a
        height: $adjusted-height
        display: flex
        align-items: center
        padding-top: 0
        padding-bottom: 0

        > *:not(:last-child)
            margin-right: 5px

        > span.coins-span
            height: 100%
            display: flex
            align-items: center
            padding: 5px
            flex-flow: column
            justify-content: space-between

li.dropdown
    &[data-progress]
        background-size: 100% 5px
        background-repeat: no-repeat
        background-position-y: 100%

    > a.dropdown-toggle

        &.piggy-bank-mode
            padding-top: math.div(50.5px - 29, 2)
            padding-bottom: math.div(50.5px - 29, 2)

        &:not(.piggy-bank-mode) img:nth-of-type(2)
            margin-left: 0.5rem

    > ul.dropdown-menu
        > li.flex-li
            display: flex
            align-items: center
            justify-content: space-between
            padding-right: 10px

            > a
                height: 19px + 3px + 3px
                width: 100%

                &.sale-active
                    min-height: calc(2em + 9px)

                    .sale-countdown
                        display: block
                        text-align: center
                        font-size: 12px

        > li.no-link
            padding: 3px 20px

.no-style-list
    list-style: none
    padding-left: 20px

    li
        padding-left: 1em
        text-indent: -1em
</style>
